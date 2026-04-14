const fs = require('fs');
const path = require('path');

const targetDirs = [
    path.join(__dirname, '../docs/stable-notes'),
    path.join(__dirname, '../docs/draft-notes')
];

function processFiles(directory) {
    if (!fs.existsSync(directory)) return;
    const files = fs.readdirSync(directory);

    files.forEach(file => {
        const oldPath = path.join(directory, file);
        
        // --- [新增] 2. 物理消除报错：无感重命名逻辑 ---
        // 将文件名中的 ( ) 和 空格 替换为 -，解决 Vite 渲染找不到模块的问题
        const safeFileName = file.replace(/[\(\)\s]/g, '-');
        const fullPath = path.join(directory, safeFileName);

        if (oldPath !== fullPath) {
            // 如果新文件名已存在，先删掉旧的冲突文件
            if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);
            fs.renameSync(oldPath, fullPath);
            console.log(`重命名: ${file} -> ${safeFileName}`);
        }

        if (fs.statSync(fullPath).isDirectory()) {
            processFiles(fullPath);
        } else if (safeFileName.endsWith('.md')) {
            let rawContent = fs.readFileSync(fullPath, 'utf8');

            // 1. 还原：把所有转义字符换回物理字符
            let content = rawContent.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
                                    .replace(/&#123;/g, '{').replace(/&#125;/g, '}');

            // 2. 物理切割：只识别最顶层的 YAML 块
            const parts = content.split(/^---\s*$/m);
            let frontmatter = "";
            let body = "";

            if (parts.length >= 3) {
                frontmatter = `---\n${parts[1].trim()}\n---`;
                body = parts.slice(2).join('---').trim();
            } else {
                body = content;
            }

            // 3. 强力清洗 Body
            body = body.replace(/<div v-pre>/g, '')
                       .replace(/<\/div>/g, '')
                       .replace(/# 笔记源码预览/g, '')
                       .replace(/```markdown/g, '')
                       .replace(/```/g, '')
                       .trim();

            // 4. 安全转义
            const safeBody = body.replace(/</g, '&lt;');

            // 5. 组装最终结果
            const finalContent = `${frontmatter}\n\n<div v-pre>\n\n# 笔记源码预览\n\n\`\`\`markdown\n${safeBody}\n\`\`\`\n\n</div>\n`;

            fs.writeFileSync(fullPath, finalContent, 'utf8');
        }
    });
}

targetDirs.forEach(dir => processFiles(dir));
console.log('✅ 强力去嵌套完成，且已自动修复非法文件名。');