# 学习进度可视化系统

基于CouchDB的多端同步学习进度管理系统。

## 架构

```
wiki文件 (Markdown)
    ↓ importer.py
CouchDB (本地/远程)
    ↓ 同步
OSS (对象存储)
    ↑ 多端同步
其他设备
```

## 快速开始

### 1. 安装CouchDB

Windows: https://couchdb.apache.org/#download

或者使用Docker:
```bash
docker run -d -p 5984:5984 -e COUCHDB_USER=admin -e COUCHDB_PASSWORD=password couchdb
```

### 2. 配置

复制 `config.example.json` 为 `config.json`:

```json
{
  "couchdb_url": "http://localhost:5984",
  "couchdb_user": "admin",
  "couchdb_password": "your_password"
}
```

### 3. 初始化数据库

```bash
python cli.py init
```

### 4. 导入wiki数据

```bash
# 导入所有领域
python cli.py import

# 导入特定领域
python cli.py import Math
```

### 5. 查询数据

```bash
# 列出领域
python cli.py list

# 统计信息
python cli.py stats

# 查询概念
python cli.py query Math 矩阵

# 导出JSON
python cli.py export Math math_data.json
```

## 数据库结构

| 数据库 | 内容 |
|--------|------|
| `learning_domains` | 领域列表 |
| `learning_concepts` | 概念节点 |
| `learning_sessions` | 学习会话 |
| `learning_connections` | 概念连接 |

## 多端同步

### 方式1: CouchDB复制

```bash
# 从本地同步到远程
curl -X POST http://localhost:5984/_replicate \
  -H "Content-Type: application/json" \
  -d '{"source":"learning_concepts","target":"http://remote:5984/learning_concepts","continuous":true}'
```

### 方式2: CouchDB内置同步

在CouchDB Futon界面配置Replication。

### 方式3: 对象存储备份

```bash
# 导出JSON后上传到OSS
python cli.py export Math
aws s3 cp math_data.json s3://your-bucket/learning/
```

## 文件结构

```
可视化/
├── config.json          # 配置文件
├── config.example.json  # 配置模板
├── couchdb_client.py    # CouchDB客户端
├── learning_db.py       # 学习数据操作层
├── importer.py          # Wiki导入器
├── cli.py               # 命令行工具
└── README.md            # 本文件
```

## API使用

```python
from learning_db import *

# 创建领域
create_domain("Math", "数学")

# 创建概念
create_concept("Math", "矩阵", mastery=0.7, status="learning")

# 列出概念
concepts = list_concepts("Math")

# 获取树结构
tree = get_tree_structure("Math")

# 获取网络结构
network = get_network_structure("Math")

# 获取时间线
timeline = get_timeline("Math")
```
