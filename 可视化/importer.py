"""从wiki文件导入数据到CouchDB"""
import re
from pathlib import Path
from learning_db import (
    create_domain, create_concept, update_concept, create_session,
    create_connection, list_domains
)
from couchdb_client import get_client

WIKI_ROOT = Path(__file__).parent.parent  # C:/Great-notes


def parse_frontmatter(content: str) -> tuple:
    """解析YAML frontmatter"""
    if not content.startswith('---'):
        return {}, content
    end = content.find('---', 3)
    if end == -1:
        return {}, content
    frontmatter = content[3:end].strip()
    body = content[end+3:].strip()

    meta = {}
    for line in frontmatter.split('\n'):
        line = line.strip()
        if ':' in line:
            key, _, value = line.partition(':')
            key = key.strip()
            value = value.strip().strip('"').strip("'")
            if value:
                meta[key] = value
    return meta, body


def parse_concept_file(filepath: Path) -> dict:
    """解析概念页面"""
    content = filepath.read_text(encoding='utf-8')
    meta, body = parse_frontmatter(content)

    result = {
        'name': meta.get('title', filepath.stem),
        'slug': meta.get('slug', ''),
        'created': meta.get('created', ''),
        'updated': meta.get('updated', ''),
    }

    # 解析树位置
    tree_match = re.search(r'## 树位置.*?\n(.*?)(?=\n##|\Z)', body, re.DOTALL)
    if tree_match:
        tree_text = tree_match.group(1)
        branch_match = re.search(r'所属分支:\s*(.+)', tree_text)
        parent_match = re.search(r'父概念:\s*\[(.+?)\]', tree_text)
        children_match = re.search(r'子概念:\s*(.+)', tree_text)
        prereq_match = re.search(r'前置依赖:\s*(.+)', tree_text)
        mastery_match = re.search(r'掌握度:\s*(.+)', tree_text)

        result['branch'] = branch_match.group(1).strip() if branch_match else None
        result['parent'] = parent_match.group(1).strip() if parent_match else None
        result['children'] = re.findall(r'\[(.+?)\]', children_match.group(1)) if children_match else []
        result['prerequisites'] = re.findall(r'\[(.+?)\]', prereq_match.group(1)) if prereq_match else []
        result['mastery_text'] = mastery_match.group(1).strip() if mastery_match else None

    # 解析核心直觉
    intuition_match = re.search(r'## 核心直觉\n(.*?)(?=\n##|\Z)', body, re.DOTALL)
    result['intuition'] = intuition_match.group(1).strip() if intuition_match else None

    # 解析网络连接
    connections = []
    conn_match = re.search(r'## 知识网络连接\n(.*?)(?=\n##|\Z)', body, re.DOTALL)
    if conn_match:
        conn_text = conn_match.group(1)
        for row in re.finditer(r'\|\s*\[(.+?)\]\(.+?\)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|', conn_text):
            connections.append({
                'target': row.group(1).strip(),
                'relation': row.group(2).strip(),
                'description': row.group(3).strip()
            })
    result['connections'] = connections

    # 解析常见误区
    misconceptions = []
    misc_match = re.search(r'## 常见误区\n(.*?)(?=\n##|\Z)', body, re.DOTALL)
    if misc_match:
        misc_text = misc_match.group(1)
        for m in re.finditer(r'\*\*误区\*\*:\s*(.+?)\n.*?\*\*纠正\*\*:\s*(.+?)(?=\n\d|\n##|\Z)', misc_text, re.DOTALL):
            misconceptions.append({
                'description': m.group(1).strip(),
                'correction': m.group(2).strip()
            })
    result['misconceptions'] = misconceptions

    # 解析待解决问题
    questions = []
    q_match = re.search(r'## 待解决问题\n(.*?)(?=\n##|\Z)', body, re.DOTALL)
    if q_match:
        for q in re.finditer(r'- \[ \]\s*(.+)', q_match.group(1)):
            questions.append(q.group(1).strip())
    result['questions'] = questions

    return result


def parse_progress_file(filepath: Path) -> list:
    """解析progress.md"""
    content = filepath.read_text(encoding='utf-8')
    sessions = []

    for match in re.finditer(r'## (\d{4}-\d{2}-\d{2})\s*\|\s*(\w+)\n(.*?)(?=\n## \d{4}|\Z)', content, re.DOTALL):
        date = match.group(1)
        session_type = match.group(2)
        body = match.group(3)

        session = {
            'date': date,
            'type': session_type,
        }

        topic_match = re.search(r'### 主题\n(.+)', body)
        session['topic'] = topic_match.group(1).strip() if topic_match else ''

        gains_match = re.search(r'### 关键收获\n(.*?)(?=\n###|\Z)', body, re.DOTALL)
        session['gains'] = []
        if gains_match:
            session['gains'] = [g.strip('- ').strip() for g in gains_match.group(1).strip().split('\n') if g.strip().startswith('-')]

        gaps_match = re.search(r'### 知识缺口\n(.*?)(?=\n###|\Z)', body, re.DOTALL)
        session['gaps'] = []
        if gaps_match:
            session['gaps'] = [g.strip('- ').strip() for g in gaps_match.group(1).strip().split('\n') if g.strip().startswith('-')]

        next_match = re.search(r'### 下次建议\n(.+)', body)
        session['next'] = next_match.group(1).strip() if next_match else ''

        sessions.append(session)

    return sessions


def import_domain(domain_name: str):
    """导入一个领域"""
    domain_path = WIKI_ROOT / domain_name
    if not domain_path.exists():
        print(f"Domain {domain_name} not found at {domain_path}")
        return

    create_domain(domain_name, domain_name)
    print(f"Importing domain: {domain_name}")

    # 导入概念
    concepts_path = domain_path / "wiki" / "concepts"
    if concepts_path.exists():
        for f in concepts_path.glob("*.md"):
            if f.name.startswith('_'):
                continue
            print(f"  Importing concept: {f.stem}")
            data = parse_concept_file(f)

            # 掌握度映射
            mastery_map = {'未学习': 0, '初步了解': 0.25, '理解中': 0.6, '掌握': 1.0}
            mastery = mastery_map.get(data.get('mastery_text', ''), 0)
            status_map = {0: 'unlearned', 0.25: 'basic', 0.6: 'learning', 1.0: 'mastered'}
            status = status_map.get(mastery, 'unlearned')

            create_concept(
                domain_name, data['name'],
                status=status,
                mastery=mastery,
                intuition=data.get('intuition'),
                slug=data.get('slug'),
                branch=data.get('branch'),
                parent=data.get('parent'),
                children=data.get('children', []),
                prerequisites=data.get('prerequisites', []),
            )

            # 导入连接
            for conn in data.get('connections', []):
                create_connection(
                    domain_name, data['name'], conn['target'],
                    conn['relation'], conn.get('description')
                )

    # 导入进度
    progress_path = domain_path / "wiki" / "progress.md"
    if progress_path.exists():
        sessions = parse_progress_file(progress_path)
        for i, s in enumerate(sessions):
            session_key = f"{s['date']}-{i:03d}"
            create_session(
                domain_name, session_key,
                start_time=s['date'],
                source_type=s.get('type', '').lower(),
                progress={
                    'topic': s.get('topic', ''),
                    'gains': s.get('gains', []),
                    'gaps': s.get('gaps', []),
                    'next': s.get('next', ''),
                }
            )
            print(f"  Imported session: {session_key}")

    print(f"Done importing {domain_name}")


def import_all():
    """导入所有领域"""
    for d in WIKI_ROOT.iterdir():
        if d.is_dir() and (d / "wiki").exists() and d.name != "可视化":
            try:
                import_domain(d.name)
            except Exception as e:
                print(f"Error importing {d.name}: {e}")


if __name__ == "__main__":
    import_all()
