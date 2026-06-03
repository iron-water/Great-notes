"""学习进度数据库操作层"""
from datetime import datetime
from couchdb_client import get_client

DB_DOMAINS = 'learning_domains'
DB_CONCEPTS = 'learning_concepts'
DB_SESSIONS = 'learning_sessions'
DB_CONNECTIONS = 'learning_connections'


# ========== 领域操作 ==========

def create_domain(name: str, display_name: str = None) -> dict:
    """创建领域"""
    client = get_client()
    doc = {
        "type": "domain",
        "name": name,
        "display_name": display_name or name,
        "created_at": datetime.utcnow().isoformat()
    }
    return client.upsert_document(DB_DOMAINS, f"domain:{name}", doc)


def get_domain(name: str) -> dict:
    """获取领域"""
    client = get_client()
    return client.get_document(DB_DOMAINS, f"domain:{name}")


def list_domains() -> list:
    """列出所有领域"""
    client = get_client()
    return client.find_documents(DB_DOMAINS, {"type": "domain"})


# ========== 概念操作 ==========

def create_concept(domain: str, name: str, **kwargs) -> dict:
    """创建概念"""
    client = get_client()
    doc_id = f"concept:{domain}:{name}"
    doc = {
        "type": "concept",
        "domain": domain,
        "name": name,
        "status": kwargs.get("status", "unlearned"),
        "mastery": kwargs.get("mastery", 0.0),
        "intuition": kwargs.get("intuition"),
        "slug": kwargs.get("slug"),
        "branch": kwargs.get("branch"),
        "parent": kwargs.get("parent"),
        "children": kwargs.get("children", []),
        "prerequisites": kwargs.get("prerequisites", []),
        "created_at": datetime.utcnow().isoformat(),
        "updated_at": datetime.utcnow().isoformat()
    }
    return client.upsert_document(DB_CONCEPTS, doc_id, doc)


def get_concept(domain: str, name: str) -> dict:
    """获取概念"""
    client = get_client()
    return client.get_document(DB_CONCEPTS, f"concept:{domain}:{name}")


def update_concept(domain: str, name: str, **kwargs) -> dict:
    """更新概念"""
    client = get_client()
    doc_id = f"concept:{domain}:{name}"
    existing = client.get_document(DB_CONCEPTS, doc_id)
    for k, v in kwargs.items():
        if k not in ('_id', '_rev', 'type', 'domain', 'name', 'created_at'):
            existing[k] = v
    existing['updated_at'] = datetime.utcnow().isoformat()
    return client.update_document(DB_CONCEPTS, doc_id, existing)


def list_concepts(domain: str, status: str = None) -> list:
    """列出领域的概念"""
    client = get_client()
    selector = {"type": "concept", "domain": domain}
    if status:
        selector["status"] = status
    return client.find_documents(DB_CONCEPTS, selector)


def get_concept_by_id(doc_id: str) -> dict:
    """通过ID获取概念"""
    client = get_client()
    return client.get_document(DB_CONCEPTS, doc_id)


# ========== 会话操作 ==========

def create_session(domain: str, session_key: str, **kwargs) -> dict:
    """创建会话"""
    client = get_client()
    doc_id = f"session:{domain}:{session_key}"
    doc = {
        "type": "session",
        "domain": domain,
        "session_key": session_key,
        "start_time": kwargs.get("start_time", datetime.utcnow().isoformat()),
        "end_time": kwargs.get("end_time"),
        "source_type": kwargs.get("source_type"),
        "source_file": kwargs.get("source_file"),
        "track": kwargs.get("track"),
        "concepts": kwargs.get("concepts", []),  # 涉及的概念名列表
        "progress": kwargs.get("progress", {}),
        "created_at": datetime.utcnow().isoformat()
    }
    return client.upsert_document(DB_SESSIONS, doc_id, doc)


def get_session(domain: str, session_key: str) -> dict:
    """获取会话"""
    client = get_client()
    return client.get_document(DB_SESSIONS, f"session:{domain}:{session_key}")


def list_sessions(domain: str, limit: int = 50) -> list:
    """列出会话"""
    client = get_client()
    selector = {"type": "session", "domain": domain}
    return client.find_documents(
        DB_SESSIONS, selector,
        sort=[{"start_time": "desc"}],
        limit=limit
    )


# ========== 连接操作 ==========

def create_connection(domain: str, source_name: str, target_name: str,
                      relation_type: str, description: str = None) -> dict:
    """创建概念连接"""
    client = get_client()
    # 使用双向key确保唯一性
    key = f"{source_name}:{target_name}:{relation_type}"
    doc_id = f"conn:{domain}:{key}"
    doc = {
        "type": "connection",
        "domain": domain,
        "source_name": source_name,
        "target_name": target_name,
        "relation_type": relation_type,
        "description": description,
        "created_at": datetime.utcnow().isoformat()
    }
    return client.upsert_document(DB_CONNECTIONS, doc_id, doc)


def list_connections(domain: str, concept_name: str = None) -> list:
    """列出连接"""
    client = get_client()
    if concept_name:
        # 查找与某概念相关的所有连接
        selector = {
            "type": "connection",
            "domain": domain,
            "$or": [
                {"source_name": concept_name},
                {"target_name": concept_name}
            ]
        }
    else:
        selector = {"type": "connection", "domain": domain}
    return client.find_documents(DB_CONNECTIONS, selector)


# ========== 统计查询 ==========

def get_mastery_stats(domain: str) -> dict:
    """获取掌握度统计"""
    concepts = list_concepts(domain)
    stats = {"unlearned": 0, "basic": 0, "learning": 0, "mastered": 0}
    for c in concepts:
        status = c.get("status", "unlearned")
        stats[status] = stats.get(status, 0) + 1
    return stats


def get_tree_structure(domain: str) -> dict:
    """获取树形结构"""
    concepts = list_concepts(domain)

    # 构建节点和边
    nodes = []
    edges = []
    name_to_id = {}

    for c in concepts:
        name = c['name']
        name_to_id[name] = c['_id']
        nodes.append({
            "id": c['_id'],
            "name": name,
            "status": c.get('status', 'unlearned'),
            "mastery": c.get('mastery', 0),
            "branch": c.get('branch'),
            "intuition": c.get('intuition'),
        })

        # 添加父子边
        parent = c.get('parent')
        if parent and parent in name_to_id:
            edges.append({
                "source": name_to_id[parent],
                "target": c['_id'],
                "type": "children"
            })

        # 添加前置依赖边
        for prereq in c.get('prerequisites', []):
            if prereq in name_to_id:
                edges.append({
                    "source": name_to_id[prereq],
                    "target": c['_id'],
                    "type": "prerequisite"
                })

    return {"nodes": nodes, "edges": edges}


def get_network_structure(domain: str) -> dict:
    """获取网络结构"""
    concepts = list_concepts(domain)
    connections = list_connections(domain)

    nodes = [{
        "id": c['_id'],
        "name": c['name'],
        "status": c.get('status', 'unlearned'),
        "mastery": c.get('mastery', 0),
    } for c in concepts]

    edges = [{
        "source": c['source_name'],
        "target": c['target_name'],
        "relation": c['relation_type'],
        "description": c.get('description'),
    } for c in connections]

    return {"nodes": nodes, "edges": edges}


def get_timeline(domain: str) -> list:
    """获取时间线数据"""
    sessions = list_sessions(domain)
    return [{
        "key": s['session_key'],
        "time": s['start_time'],
        "type": s.get('source_type'),
        "topic": s.get('progress', {}).get('topic', ''),
        "concepts": s.get('concepts', []),
        "completion": s.get('progress', {}).get('completion', 0),
    } for s in sessions]
