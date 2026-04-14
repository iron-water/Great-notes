---
title: "Guild"
date: 2026-04-14
tags: []
source: CouchDB
draft: true
---

<div v-pre>

# 笔记源码预览

```markdown
---
title: Guild
emoji: 🖨️
cover: '![](https://xiaoshujiangaly1.oss-cn-beijing.aliyuncs.com/小书匠/minerU_guide.md/cc45f0de204be1947cc71e5067160d72.jpg)'
---
# MinerU OCR 使用指南

> 适用环境：Windows 11 + WSL2 + Ubuntu，华硕 FX608LM（RTX 5060 Laptop 8GB）

---
## 一、环境说明

| 项目 | 内容 |
|---|---|
| 系统 | WSL2 Ubuntu |
| Python 环境 | `~/mineru_env`（venv） |
| 模型位置 | `~/.cache/modelscope/hub`（modelscope 自动缓存） |
| 配置文件 | `~/mineru.json` |

---
## 二、每次使用前

bash
# 1. 激活虚拟环境
source ~/mineru_env/bin/activate

# 2. 设置必要环境变量
export MINERU_MODEL_SOURCE=modelscope
export MINERU_PROCESSING_WINDOW_SIZE=16

# 3. 进入工作目录（放你 PDF 的地方）
cd /mnt/c/你的目录


> 如果已经写入 `~/.bashrc`，步骤 2 可以跳过。

---
## 三、基本使用

bash
# 处理单个 PDF（推荐命令）
mineru -p 文件.pdf -o ./output --backend vlm-auto-engine

# 输出结果在 ./output/ 下，包含：
# - 文件名.md        主要结果，公式为 LaTeX 格式
# - 文件名_images/   提取的图片
# - 文件名.json      结构化数据


---
## 四、后端选择

| 后端 | 命令参数 | 适用场景 |
|---|---|---|
| VLM（推荐） | `--backend vlm-auto-engine` | 数学公式、中英混排、复杂排版 |
| Pipeline | `--backend pipeline` | 普通文档、速度优先、显存紧张时 |

**你的主要需求（中英文数学文档）务必用 `vlm-auto-engine`。**

---
## 五、大文件处理策略

你的机器处理速度约为**每页 5-15 秒**（含公式页面更慢），建议把大文件拆成 50 页以内分批处理。

### 5.1 拆分 PDF

bash
pip install pypdf

python3 -c "
from pypdf import PdfWriter, PdfReader
input_pdf = '你的文件.pdf'   # 修改这里
chunk_size = 50
reader = PdfReader(input_pdf)
total = len(reader.pages)
print(f'总页数: {total}')
for i in range(0, total, chunk_size):
    writer = PdfWriter()
    for page in reader.pages[i:i+chunk_size]:
        writer.add_page(page)
    out_name = f'chunk_{i//chunk_size+1:03d}.pdf'
    with open(out_name, 'wb') as f:
        writer.write(f)
    print(f'已生成: {out_name}')
"


### 5.2 批量处理（带休息，防蓝屏）

bash
for f in chunk_*.pdf; do
    echo "====== 正在处理: $f ======"
    mineru -p "$f" -o "./output" --backend vlm-auto-engine
    echo "完成，休息90秒..."
    sleep 90
done


### 5.3 合并结果

bash
cat output/chunk_*/*.md > 完整结果.md
echo "合并完成"


---
## 六、一键睡前脚本

保存为 `~/run_mineru.sh`，睡前运行，早上看结果：

bash
cat > ~/run_mineru.sh &lt;&lt; 'EOF'
#!/bin/bash
source ~/mineru_env/bin/activate
export MINERU_MODEL_SOURCE=modelscope
export MINERU_PROCESSING_WINDOW_SIZE=16

# ===== 修改以下两行 =====
WORK_DIR="/mnt/c/test"        # 你的工作目录
INPUT_PDF="数学分析.pdf"       # 你的 PDF 文件名
# =======================

cd "$WORK_DIR"

# 拆分
python3 -c "
from pypdf import PdfWriter, PdfReader
chunk_size = 50
reader = PdfReader('$INPUT_PDF')
total = len(reader.pages)
print(f'总页数: {total}')
for i in range(0, total, chunk_size):
    writer = PdfWriter()
    for page in reader.pages[i:i+chunk_size]:
        writer.add_page(page)
    out_name = f'chunk_{i//chunk_size+1:03d}.pdf'
    with open(out_name, 'wb') as f:
        writer.write(f)
    print(f'已生成: {out_name}')
"

# 处理
for f in chunk_*.pdf; do
    echo "====== 处理: $f ======"
    mineru -p "$f" -o "./output" --backend vlm-auto-engine
    echo "休息90秒..."
    sleep 90
done

# 合并
cat output/chunk_*/*.md > 完整结果.md
echo "全部完成！"
EOF

chmod +x ~/run_mineru.sh


运行：
bash
bash ~/run_mineru.sh


---
## 七、防蓝屏注意事项

1. **性能模式**：用 `Fn+F5` 或 Armoury Crate 把性能模式设为**平衡**，不要用狂暴模式
2. **窗口大小**：保持 `MINERU_PROCESSING_WINDOW_SIZE=16`，不要调大
3. **批次间隔**：每批之间 `sleep 90` 让 GPU 降温
4. **避免同时运行**：处理期间不要跑游戏或其他 GPU 密集任务

---
## 八、常见报错速查

| 报错关键词 | 原因 | 解决方法 |
|---|---|---|
| `Connection refused` / `huggingface.co` | 连不上 HuggingFace | `export MINERU_MODEL_SOURCE=modelscope` |
| `NoneType has no attribute 'get'` | 配置文件格式错误或文件名错 | 检查 `~/mineru.json` 是否存在且格式正确 |
| `CUDA out of memory` | 显存不足 | 减小 `MINERU_PROCESSING_WINDOW_SIZE`，或拆分 PDF |
| `accelerate` 未安装 | 缺少依赖 | `pip install accelerate -i https://pypi.tuna.tsinghua.edu.cn/simple` |
| `'vlm' is not one of ...` | 后端名称错误 | 用 `--backend vlm-auto-engine` |
| `Read timed out` / pip 下载超时 | 网络慢 | 加 `-i https://pypi.tuna.tsinghua.edu.cn/simple` |
| `clock_watchdog_timeout` 蓝屏 | GPU 持续满载 | 切平衡模式，减小窗口大小，批次间加休息 |

---
## 九、配置文件参考

`~/mineru.json` 内容：

json
{
    "models-dir": {
        "pipeline": "/home/sushi/mineru_models",
        "vlm": "/home/sushi/mineru_models"
    }
}


---
## 十、WSL 路径对照

| Windows 路径 | WSL 路径 |
|---|---|
| `C:\test` | `/mnt/c/test` |
| `C:\Users\21894\Desktop` | `/mnt/c/Users/21894/Desktop` |
| `D:\data` | `/mnt/d/data` |
```

</div>
