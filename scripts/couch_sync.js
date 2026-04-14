/**
 * CouchDB → Markdown 同步脚本
 * 运行方式：node scripts/couch_sync.js
 * 
 * 使用前请修改以下配置：
 */

const nano = require('nano');
const fs = require('fs');
const path = require('path');

// ===== 配置区（修改这里）=====
const COUCHDB_URL = 'http://anno:unknowdw221@localhost:5984';  // CouchDB连接地址
const DATABASE_NAME = 'anno';                        // 数据库名
const OUTPUT_DIR = path.join(__dirname, '../docs/draft-notes'); // 输出目录
// ==============================

const db = nano(COUCHDB_URL).db.use(DATABASE_NAME);

async function sync() {
  console.log('🔄 开始同步 CouchDB 草稿...');

  // 清空输出目录（重新生成）
  if (fs.existsSync(OUTPUT_DIR)) {
    fs.rmSync(OUTPUT_DIR, { recursive: true });
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // 获取所有文档
  const result = await db.list({ include_docs: true });
  const docs = result.rows
    .map(row => row.doc)
    .filter(doc => !doc._id.startsWith('_')); // 过滤系统文档

  let count = 0;

  for (const doc of docs) {
    // 跳过没有内容的文档
    if (!doc.content && !doc.md && !doc.body && !doc.text) continue;

    // 获取笔记内容（兼容不同字段名）
    const content = doc.content || doc.md || doc.body || doc.text || '';

    // 获取笔记标题
    const title = doc.title || doc.name || doc._id;

    // 获取日期
    const date = doc.updated_at || doc.created_at || new Date().toISOString().split('T')[0];

    // 获取标签
    const tags = Array.isArray(doc.tags) ? doc.tags : [];

    // 生成文件名（过滤非法字符）
    const filename = title
      .replace(/[<>:"/\\|?*\s]/g, '-')
      .replace(/-+/g, '-')
      .toLowerCase()
      .slice(0, 60) + '.md';

    // 生成 Frontmatter + 内容
    const mdContent = `---
title: "${title}"
date: ${date}
tags: [${tags.map(t => `"${t}"`).join(', ')}]
source: CouchDB
draft: true
---
<div v-pre>
${content}
</div>
`;

    fs.writeFileSync(path.join(OUTPUT_DIR, filename), mdContent, 'utf-8');
    count++;
  }

  // 生成草稿区首页索引
  const indexContent = `---
title: 草稿笔记
---

# 📝 草稿笔记

> 这里是我的草稿区，存放尚未整理完成的笔记。内容可能不完整，仅供参考。

共 ${count} 篇草稿

`;
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.md'), indexContent, 'utf-8');

  console.log(`✅ 同步完成！共导出 ${count} 篇草稿笔记`);
}

sync().catch(err => {
  console.error('❌ 同步失败：', err.message);
  console.error('提示：请确认 CouchDB 正在运行，并检查连接地址和密码');
  process.exit(1);
});
