"""数据库查询工具 - 为可视化提供数据"""
import json
from database import get_connection


def get_tree_data(domain_name: str) -> dict:
    """获取树形图数据"""
    conn = get_connection()

    # 获取domain_id
    domain = conn.execute("SELECT id FROM domains WHERE name = ?", (domain_name,)).fetchone()
    if not domain:
        conn.close()
        return {"nodes": [], "edges": []}

    domain_id = domain['id']

    # 获取所有概念及其树位置
    concepts = conn.execute("""
        SELECT c.id, c.name, c.status, c.mastery, c.intuition,
               ctp.branch, ctp.parent_concept_id
        FROM concepts c
        LEFT JOIN concept_tree_positions ctp ON c.id = ctp.concept_id
        WHERE c.domain_id = ?
    """, (domain_id,)).fetchall()

    # 获取层级关系
    hierarchy = conn.execute("""
        SELECT ch.parent_id, ch.child_id
        FROM concept_hierarchy ch
        JOIN concepts c ON ch.parent_id = c.id
        WHERE c.domain_id = ?
    """, (domain_id,)).fetchall()

    # 获取前置依赖
    prerequisites = conn.execute("""
        SELECT cp.concept_id, cp.prerequisite_id
        FROM concept_prerequisites cp
        JOIN concepts c ON cp.concept_id = c.id
        WHERE c.domain_id = ?
    """, (domain_id,)).fetchall()

    # 构建节点
    nodes = []
    for c in concepts:
        nodes.append({
            "id": c['id'],
            "name": c['name'],
            "status": c['status'] or 'unlearned',
            "mastery": c['mastery'] or 0.0,
            "intuition": c['intuition'],
            "branch": c['branch'],
        })

    # 构建边
    edges = []
    for h in hierarchy:
        edges.append({
            "source": h['parent_id'],
            "target": h['child_id'],
            "type": "children"
        })
    for p in prerequisites:
        edges.append({
            "source": p['prerequisite_id'],
            "target": p['concept_id'],
            "type": "prerequisite"
        })

    conn.close()
    return {"nodes": nodes, "edges": edges}


def get_network_data(domain_name: str) -> dict:
    """获取网络图数据"""
    conn = get_connection()

    domain = conn.execute("SELECT id FROM domains WHERE name = ?", (domain_name,)).fetchone()
    if not domain:
        conn.close()
        return {"nodes": [], "edges": []}

    domain_id = domain['id']

    concepts = conn.execute("""
        SELECT id, name, status, mastery FROM concepts WHERE domain_id = ?
    """, (domain_id,)).fetchall()

    connections = conn.execute("""
        SELECT cc.source_concept_id, cc.target_concept_id, cc.relation_type, cc.description
        FROM concept_connections cc
        JOIN concepts c ON cc.source_concept_id = c.id
        WHERE c.domain_id = ?
    """, (domain_id,)).fetchall()

    nodes = [{"id": c['id'], "name": c['name'], "status": c['status'], "mastery": c['mastery']} for c in concepts]
    edges = [{"source": c['source_concept_id'], "target": c['target_concept_id'],
              "relation": c['relation_type'], "description": c['description']} for c in connections]

    conn.close()
    return {"nodes": nodes, "edges": edges}


def get_timeline_data(domain_name: str) -> list:
    """获取时间线数据"""
    conn = get_connection()

    domain = conn.execute("SELECT id FROM domains WHERE name = ?", (domain_name,)).fetchone()
    if not domain:
        conn.close()
        return []

    domain_id = domain['id']

    sessions = conn.execute("""
        SELECT s.id, s.session_key, s.start_time, s.source_type,
               pr.current_topic, pr.completion, pr.knowledge_gaps, pr.next_steps
        FROM sessions s
        LEFT JOIN progress_records pr ON s.id = pr.session_id
        WHERE s.domain_id = ?
        ORDER BY s.start_time
    """, (domain_id,)).fetchall()

    result = []
    for s in sessions:
        result.append({
            "id": s['id'],
            "key": s['session_key'],
            "time": s['start_time'],
            "type": s['source_type'],
            "topic": s['current_topic'],
            "completion": s['completion'],
            "gaps": json.loads(s['knowledge_gaps']) if s['knowledge_gaps'] else [],
            "next": json.loads(s['next_steps']) if s['next_steps'] else [],
        })

    conn.close()
    return result


def get_mastery_data(domain_name: str) -> dict:
    """获取掌握度数据"""
    conn = get_connection()

    domain = conn.execute("SELECT id FROM domains WHERE name = ?", (domain_name,)).fetchone()
    if not domain:
        conn.close()
        return {"concepts": [], "distribution": {}}

    domain_id = domain['id']

    concepts = conn.execute("""
        SELECT name, status, mastery FROM concepts WHERE domain_id = ? ORDER BY mastery DESC
    """, (domain_id,)).fetchall()

    # 分布统计
    distribution = {}
    for c in concepts:
        status = c['status'] or 'unlearned'
        if status not in distribution:
            distribution[status] = 0
        distribution[status] += 1

    conn.close()
    return {
        "concepts": [{"name": c['name'], "status": c['status'], "mastery": c['mastery']} for c in concepts],
        "distribution": distribution
    }


def get_all_domains() -> list:
    """获取所有领域"""
    conn = get_connection()
    domains = conn.execute("SELECT * FROM domains").fetchall()
    conn.close()
    return [dict(d) for d in domains]


def export_visualization_data(domain_name: str, output_path: str = None):
    """导出可视化数据为JSON"""
    data = {
        "domain": domain_name,
        "tree": get_tree_data(domain_name),
        "network": get_network_data(domain_name),
        "timeline": get_timeline_data(domain_name),
        "mastery": get_mastery_data(domain_name),
    }

    if output_path:
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"Data exported to {output_path}")

    return data


if __name__ == "__main__":
    domains = get_all_domains()
    print(f"Available domains: {[d['name'] for d in domains]}")

    for d in domains:
        print(f"\n--- {d['name']} ---")
        data = export_visualization_data(d['name'])
        print(f"  Tree nodes: {len(data['tree']['nodes'])}")
        print(f"  Network edges: {len(data['network']['edges'])}")
        print(f"  Timeline entries: {len(data['timeline'])}")
        print(f"  Mastery concepts: {len(data['mastery']['concepts'])}")
