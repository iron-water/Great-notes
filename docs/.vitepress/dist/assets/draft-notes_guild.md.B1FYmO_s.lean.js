import{_ as l,o as a,c as h,j as i,a as s}from"./chunks/framework.DeBUZsJm.js";const o=JSON.parse('{"title":"Guild","description":"","frontmatter":{"title":"Guild","date":"2026-04-14T00:00:00.000Z","tags":[],"source":"CouchDB","draft":true},"headers":[],"relativePath":"draft-notes/guild.md","filePath":"draft-notes/guild.md"}'),t={name:"draft-notes/guild.md"};function k(e,n,E,p,d,r){return a(),h("div",null,[...n[0]||(n[0]=[i("div",null,[i("h1",{id:"笔记源码预览",tabindex:"-1"},[s("笔记源码预览 "),i("a",{class:"header-anchor",href:"#笔记源码预览","aria-label":'Permalink to "笔记源码预览"'},"​")]),i("div",{class:"language-markdown vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"markdown"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"title: Guild")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"emoji: 🖨️")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"cover: '![]("),i("span",{style:{"--shiki-light":"#24292E","--shiki-light-text-decoration":"underline","--shiki-dark":"#E1E4E8","--shiki-dark-text-decoration":"underline"}},"https://xiaoshujiangaly1.oss-cn-beijing.aliyuncs.com/小书匠/minerU_guide.md/cc45f0de204be1947cc71e5067160d72.jpg"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# MinerU OCR 使用指南")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> 适用环境：Windows 11 + WSL2 + Ubuntu，华硕 FX608LM（RTX 5060 Laptop 8GB）")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"## 一、环境说明")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| 项目 | 内容 |")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"|---|---|")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| 系统 | WSL2 Ubuntu |")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| Python 环境 | "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`~/mineru_env`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"（venv） |")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| 模型位置 | "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`~/.cache/modelscope/hub`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"（modelscope 自动缓存） |")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| 配置文件 | "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`~/mineru.json`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," |")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"## 二、每次使用前")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"bash")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 1. 激活虚拟环境")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"source ~/mineru_env/bin/activate")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 2. 设置必要环境变量")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"export MINERU_MODEL_SOURCE=modelscope")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"export MINERU_PROCESSING_WINDOW_SIZE=16")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 3. 进入工作目录（放你 PDF 的地方）")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"cd /mnt/c/你的目录")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> 如果已经写入 "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`~/.bashrc`"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"，步骤 2 可以跳过。")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"## 三、基本使用")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"bash")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 处理单个 PDF（推荐命令）")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"mineru -p 文件.pdf -o ./output --backend vlm-auto-engine")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 输出结果在 ./output/ 下，包含：")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# - 文件名.md        主要结果，公式为 LaTeX 格式")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# - 文件名_images/   提取的图片")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# - 文件名.json      结构化数据")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"## 四、后端选择")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| 后端 | 命令参数 | 适用场景 |")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"|---|---|---|")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| VLM（推荐） | "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`--backend vlm-auto-engine`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," | 数学公式、中英混排、复杂排版 |")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| Pipeline | "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`--backend pipeline`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," | 普通文档、速度优先、显存紧张时 |")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**你的主要需求（中英文数学文档）务必用 "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"`vlm-auto-engine`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"。**")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"## 五、大文件处理策略")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"你的机器处理速度约为"),i("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**每页 5-15 秒**"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"（含公式页面更慢），建议把大文件拆成 50 页以内分批处理。")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 5.1 拆分 PDF")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"bash")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"pip install pypdf")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'python3 -c "')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"from pypdf import PdfWriter, PdfReader")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"input_pdf = '你的文件.pdf'   # 修改这里")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"chunk_size = 50")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"reader = PdfReader(input_pdf)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"total = len(reader.pages)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"print(f'总页数: {total}')")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"for i in range(0, total, chunk_size):")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    writer = PdfWriter()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    for page in reader.pages["),i("span",{style:{"--shiki-light":"#032F62","--shiki-light-text-decoration":"underline","--shiki-dark":"#DBEDFF","--shiki-dark-text-decoration":"underline"}},"i:i+chunk_size"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]:")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        writer.add_page(page)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    out_name = f'chunk_{i//chunk_size+1:03d}.pdf'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    with open(out_name, 'wb') as f:")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        writer.write(f)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    print(f'已生成: {out_name}')")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'"')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 5.2 批量处理（带休息，防蓝屏）")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"bash")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"for f in chunk_*.pdf; do")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    echo "====== 正在处理: $f ======"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    mineru -p "$f" -o "./output" --backend vlm-auto-engine')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    echo "完成，休息90秒..."')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    sleep 90")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"done")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 5.3 合并结果")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"bash")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"cat output/chunk_*/*.md > 完整结果.md")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'echo "合并完成"')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"## 六、一键睡前脚本")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"保存为 "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`~/run_mineru.sh`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"，睡前运行，早上看结果：")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"bash")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"cat > ~/run_mineru.sh &lt;&lt; 'EOF'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"#!/bin/bash")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"source ~/mineru_env/bin/activate")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"export MINERU_MODEL_SOURCE=modelscope")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"export MINERU_PROCESSING_WINDOW_SIZE=16")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# ===== 修改以下两行 =====")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'WORK_DIR="/mnt/c/test"        # 你的工作目录')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'INPUT_PDF="数学分析.pdf"       # 你的 PDF 文件名')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# =======================")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'cd "$WORK_DIR"')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 拆分")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'python3 -c "')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"from pypdf import PdfWriter, PdfReader")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"chunk_size = 50")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"reader = PdfReader('$INPUT_PDF')")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"total = len(reader.pages)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"print(f'总页数: {total}')")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"for i in range(0, total, chunk_size):")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    writer = PdfWriter()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    for page in reader.pages["),i("span",{style:{"--shiki-light":"#032F62","--shiki-light-text-decoration":"underline","--shiki-dark":"#DBEDFF","--shiki-dark-text-decoration":"underline"}},"i:i+chunk_size"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]:")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        writer.add_page(page)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    out_name = f'chunk_{i//chunk_size+1:03d}.pdf'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    with open(out_name, 'wb') as f:")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        writer.write(f)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    print(f'已生成: {out_name}')")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'"')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 处理")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"for f in chunk_*.pdf; do")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    echo "====== 处理: $f ======"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    mineru -p "$f" -o "./output" --backend vlm-auto-engine')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    echo "休息90秒..."')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    sleep 90")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"done")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 合并")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"cat output/chunk_*/*.md > 完整结果.md")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'echo "全部完成！"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"EOF")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"chmod +x ~/run_mineru.sh")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"运行：")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"bash")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"bash ~/run_mineru.sh")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"## 七、防蓝屏注意事项")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"1."),i("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}}," **性能模式**"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"：用 "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`Fn+F5`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 或 Armoury Crate 把性能模式设为"),i("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**平衡**"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"，不要用狂暴模式")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"2."),i("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}}," **窗口大小**"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"：保持 "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`MINERU_PROCESSING_WINDOW_SIZE=16`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"，不要调大")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"3."),i("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}}," **批次间隔**"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"：每批之间 "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`sleep 90`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 让 GPU 降温")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"4."),i("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}}," **避免同时运行**"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"：处理期间不要跑游戏或其他 GPU 密集任务")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"## 八、常见报错速查")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| 报错关键词 | 原因 | 解决方法 |")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"|---|---|---|")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`Connection refused`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," / "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`huggingface.co`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," | 连不上 HuggingFace | "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`export MINERU_MODEL_SOURCE=modelscope`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," |")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`NoneType has no attribute 'get'`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," | 配置文件格式错误或文件名错 | 检查 "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`~/mineru.json`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 是否存在且格式正确 |")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`CUDA out of memory`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," | 显存不足 | 减小 "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`MINERU_PROCESSING_WINDOW_SIZE`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"，或拆分 PDF |")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`accelerate`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 未安装 | 缺少依赖 | "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`pip install accelerate -i https://pypi.tuna.tsinghua.edu.cn/simple`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," |")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`'vlm' is not one of ...`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," | 后端名称错误 | 用 "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`--backend vlm-auto-engine`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," |")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`Read timed out`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," / pip 下载超时 | 网络慢 | 加 "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`-i https://pypi.tuna.tsinghua.edu.cn/simple`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," |")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`clock_watchdog_timeout`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 蓝屏 | GPU 持续满载 | 切平衡模式，减小窗口大小，批次间加休息 |")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"## 九、配置文件参考")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`~/mineru.json`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 内容：")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"json")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    "models-dir": {')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        "pipeline": "/home/sushi/mineru_models",')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        "vlm": "/home/sushi/mineru_models"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"## 十、WSL 路径对照")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| Windows 路径 | WSL 路径 |")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"|---|---|")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`C:\\test`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," | "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`/mnt/c/test`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," |")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`C:\\Users\\21894\\Desktop`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," | "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`/mnt/c/Users/21894/Desktop`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," |")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`D:\\data`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," | "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`/mnt/d/data`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," |")])])])])],-1)])])}const c=l(t,[["render",k]]);export{o as __pageData,c as default};
