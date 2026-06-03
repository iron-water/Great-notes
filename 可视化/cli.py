"""命令行工具"""
import sys
import json
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from couchdb_client import init_couchdb
from importer import import_all, import_domain
from learning_db import (
    list_domains, list_concepts, list_sessions, list_connections,
    get_mastery_stats, get_tree_structure, get_network_structure, get_timeline
)


def cmd_init():
    """初始化CouchDB"""
    init_couchdb()


def cmd_import(args):
    """导入数据"""
    if args:
        for domain in args:
            import_domain(domain)
    else:
        import_all()


def cmd_list():
    """列出领域"""
    domains = list_domains()
    if not domains:
        print("No domains found. Run 'python cli.py import' first.")
        return
    for d in domains:
        print(f"  {d['name']}: {d.get('display_name', d['name'])}")


def cmd_stats(args):
    """显示统计"""
    domains = list_domains()
    if not domains:
        print("No data. Run 'python cli.py import' first.")
        return

    for d in domains:
        if args and d['name'] not in args:
            continue
        domain = d['name']
        print(f"\n=== {domain} ===")

        concepts = list_concepts(domain)
        print(f"  Concepts: {len(concepts)}")

        stats = get_mastery_stats(domain)
        print(f"  Mastery: {stats}")

        sessions = list_sessions(domain)
        print(f"  Sessions: {len(sessions)}")

        connections = list_connections(domain)
        print(f"  Connections: {len(connections)}")


def cmd_export(args):
    """导出数据为JSON"""
    if not args:
        print("Usage: python cli.py export <domain> [output_path]")
        return
    domain = args[0]
    output = args[1] if len(args) > 1 else str(Path(__file__).parent / f"{domain}_data.json")

    data = {
        "domain": domain,
        "tree": get_tree_structure(domain),
        "network": get_network_structure(domain),
        "timeline": get_timeline(domain),
        "mastery": get_mastery_stats(domain),
    }

    with open(output, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Exported to {output}")


def cmd_query(args):
    """查询概念"""
    if len(args) < 2:
        print("Usage: python cli.py query <domain> <concept>")
        return
    domain, concept_name = args[0], args[1]

    concepts = list_concepts(domain)
    for c in concepts:
        if c['name'] == concept_name:
            print(json.dumps(c, ensure_ascii=False, indent=2))
            connections = list_connections(domain, concept_name)
            if connections:
                print(f"\nConnections ({len(connections)}):")
                for conn in connections:
                    print(f"  {conn['relation_type']}: {conn['source_name']} -> {conn['target_name']}")
            return
    print(f"Concept '{concept_name}' not found")


def main():
    if len(sys.argv) < 2:
        print("""Usage: python cli.py <command> [args]

Commands:
  init                    - Initialize CouchDB databases
  import [domain...]      - Import wiki data
  list                    - List all domains
  stats [domain...]       - Show statistics
  export <domain> [path]  - Export as JSON
  query <domain> <name>   - Query a concept
""")
        return

    cmd = sys.argv[1]
    args = sys.argv[2:]

    commands = {
        'init': cmd_init,
        'import': lambda: cmd_import(args),
        'list': cmd_list,
        'stats': lambda: cmd_stats(args),
        'export': lambda: cmd_export(args),
        'query': lambda: cmd_query(args),
    }

    if cmd in commands:
        commands[cmd]()
    else:
        print(f"Unknown command: {cmd}")


if __name__ == "__main__":
    main()
