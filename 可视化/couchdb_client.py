"""CouchDB客户端 - 支持多端同步"""
import requests
import json
from pathlib import Path
from datetime import datetime

CONFIG_PATH = Path(__file__).parent / "config.json"


def load_config() -> dict:
    """加载配置"""
    if CONFIG_PATH.exists():
        with open(CONFIG_PATH, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}


def save_config(config: dict):
    """保存配置"""
    with open(CONFIG_PATH, 'w', encoding='utf-8') as f:
        json.dump(config, f, ensure_ascii=False, indent=2)


class CouchDBClient:
    """CouchDB客户端"""

    def __init__(self, base_url: str = None, username: str = None, password: str = None):
        config = load_config()
        self.base_url = base_url or config.get('couchdb_url', 'http://localhost:5984')
        self.username = username or config.get('couchdb_user', '')
        self.password = password or config.get('couchdb_password', '')
        self.session = requests.Session()
        if self.username:
            self.session.auth = (self.username, self.password)

    def _url(self, path: str) -> str:
        return f"{self.base_url}/{path}"

    def _request(self, method: str, path: str, **kwargs) -> dict:
        url = self._url(path)
        kwargs.setdefault('headers', {})['Content-Type'] = 'application/json'
        resp = self.session.request(method, url, **kwargs)
        if resp.status_code >= 400:
            raise Exception(f"CouchDB error {resp.status_code}: {resp.text}")
        return resp.json() if resp.text else {}

    # ========== 数据库操作 ==========

    def list_databases(self) -> list:
        """列出所有数据库"""
        return self._request('GET', '_all_dbs')

    def create_database(self, db_name: str) -> dict:
        """创建数据库"""
        try:
            return self._request('PUT', db_name)
        except Exception as e:
            if '412' in str(e):
                return {"ok": True, "msg": "already exists"}
            raise

    def delete_database(self, db_name: str) -> dict:
        """删除数据库"""
        return self._request('DELETE', db_name)

    def database_exists(self, db_name: str) -> bool:
        """检查数据库是否存在"""
        try:
            self._request('HEAD', db_name)
            return True
        except:
            return False

    # ========== 文档操作 ==========

    def create_document(self, db_name: str, doc: dict, doc_id: str = None) -> dict:
        """创建文档"""
        if doc_id:
            resp = self._request('PUT', f"{db_name}/{doc_id}", json=doc)
        else:
            resp = self._request('POST', db_name, json=doc)
        return resp

    def get_document(self, db_name: str, doc_id: str) -> dict:
        """获取文档"""
        return self._request('GET', f"{db_name}/{doc_id}")

    def update_document(self, db_name: str, doc_id: str, doc: dict) -> dict:
        """更新文档（需要提供_rev）"""
        existing = self.get_document(db_name, doc_id)
        doc['_id'] = doc_id
        doc['_rev'] = existing['_rev']
        return self._request('PUT', f"{db_name}/{doc_id}", json=doc)

    def delete_document(self, db_name: str, doc_id: str) -> dict:
        """删除文档"""
        existing = self.get_document(db_name, doc_id)
        rev = existing['_rev']
        return self._request('DELETE', f"{db_name}/{doc_id}?rev={rev}")

    def upsert_document(self, db_name: str, doc_id: str, doc: dict) -> dict:
        """插入或更新文档"""
        try:
            existing = self.get_document(db_name, doc_id)
            doc['_id'] = doc_id
            doc['_rev'] = existing['_rev']
            return self._request('PUT', f"{db_name}/{doc_id}", json=doc)
        except:
            doc['_id'] = doc_id
            return self._request('PUT', f"{db_name}/{doc_id}", json=doc)

    # ========== 查询操作 ==========

    def find_documents(self, db_name: str, selector: dict, fields: list = None,
                       sort: list = None, limit: int = None) -> list:
        """使用Mango查询"""
        query = {"selector": selector}
        if fields:
            query["fields"] = fields
        if sort:
            query["sort"] = sort
        if limit:
            query["limit"] = limit
        resp = self._request('POST', f"{db_name}/_find", json=query)
        return resp.get('docs', [])

    def create_index(self, db_name: str, fields: list, name: str = None) -> dict:
        """创建索引"""
        index = {"index": {"fields": fields}}
        if name:
            index["name"] = name
        return self._request('POST', f"{db_name}/_index", json=index)

    def get_all_documents(self, db_name: str, include_docs: bool = True,
                          limit: int = None) -> list:
        """获取所有文档"""
        params = {"include_docs": "true" if include_docs else "false"}
        if limit:
            params["limit"] = limit
        resp = self._request('GET', f"{db_name}/_all_docs", params=params)
        if include_docs:
            return [row['doc'] for row in resp.get('rows', []) if 'doc' in row]
        return [row['id'] for row in resp.get('rows', [])]

    # ========== 视图操作 ==========

    def create_view(self, db_name: str, design_doc: str, views: dict) -> dict:
        """创建设计文档和视图"""
        doc_id = f"_design/{design_doc}"
        doc = {"views": views}
        return self.upsert_document(db_name, doc_id, doc)

    def query_view(self, db_name: str, design_doc: str, view_name: str,
                   startkey=None, endkey=None, group: bool = False,
                   limit: int = None) -> list:
        """查询视图"""
        params = {}
        if startkey is not None:
            params["startkey"] = json.dumps(startkey)
        if endkey is not None:
            params["endkey"] = json.dumps(endkey)
        if group:
            params["group"] = "true"
        if limit:
            params["limit"] = limit
        resp = self._request('GET', f"{db_name}/_design/{design_doc}/_view/{view_name}", params=params)
        return resp.get('rows', [])

    # ========== 同步操作 ==========

    def replicate(self, source: str, target: str, continuous: bool = False) -> dict:
        """触发复制"""
        doc = {
            "source": source,
            "target": target,
            "continuous": continuous
        }
        return self._request('POST', "_replicate", json=doc)

    def setup_sync(self, remote_url: str, db_name: str, continuous: bool = True) -> dict:
        """设置同步"""
        return self.replicate(db_name, f"{remote_url}/{db_name}", continuous)


# 全局客户端实例
_client = None


def get_client() -> CouchDBClient:
    """获取全局客户端"""
    global _client
    if _client is None:
        _client = CouchDBClient()
    return _client


def init_couchdb():
    """初始化CouchDB，创建必要的数据库和索引"""
    client = get_client()

    databases = [
        'learning_domains',
        'learning_concepts',
        'learning_sessions',
        'learning_connections',
    ]

    for db in databases:
        client.create_database(db)
        print(f"Database ready: {db}")

    # 创建索引
    try:
        client.create_index('learning_concepts', ['domain_id', 'name'], 'idx_domain_name')
        client.create_index('learning_concepts', ['domain_id', 'status'], 'idx_domain_status')
        client.create_index('learning_sessions', ['domain_id', 'start_time'], 'idx_domain_time')
        client.create_index('learning_connections', ['source_id'], 'idx_source')
        client.create_index('learning_connections', ['target_id'], 'idx_target')
        print("Indexes created")
    except Exception as e:
        print(f"Index creation note: {e}")

    print("CouchDB initialized")


if __name__ == "__main__":
    init_couchdb()
