import{_ as l,o as a,c as h,j as s,a as i}from"./chunks/framework.DeBUZsJm.js";const c=JSON.parse('{"title":"个人静态网站搭建完全指南","description":"","frontmatter":{"title":"个人静态网站搭建完全指南","date":"2026-04-14T00:00:00.000Z","tags":[],"source":"CouchDB","draft":true},"headers":[],"relativePath":"draft-notes/个人静态网站搭建完全指南.md","filePath":"draft-notes/个人静态网站搭建完全指南.md"}'),t={name:"draft-notes/个人静态网站搭建完全指南.md"};function k(e,n,E,p,d,g){return a(),h("div",null,[...n[0]||(n[0]=[s("div",null,[s("h1",{id:"笔记源码预览",tabindex:"-1"},[i("笔记源码预览 "),s("a",{class:"header-anchor",href:"#笔记源码预览","aria-label":'Permalink to "笔记源码预览"'},"​")]),s("div",{class:"language-markdown vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"markdown"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"title: 个人静态网站搭建完全指南")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"emoji: 🗿")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 🏡 个人网站搭建完全指南 v2.0")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> 适合人群：计算机新手 目标：笔记展示 + 有趣互动 + ICP合规 + 高拓展性 配套：阿里云OSS + CouchDB草稿区 + GitHub稳定区")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"* * *")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"["),s("span",{style:{"--shiki-light":"#032F62","--shiki-light-text-decoration":"underline","--shiki-dark":"#DBEDFF","--shiki-dark-text-decoration":"underline"}},"toc"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"* * *")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"## 一、架构总览与重要说明")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### ⚠️ 关于ICP备案的强制要求")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**冀ICP备2026011691号**"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}}," 意味着你的网站"),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**必须部署在中国大陆服务器上**"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> GitHub Pages 是境外服务器，"),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**不符合工信部要求**"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"，不能作为最终部署方案。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> 因此本教程将部署目标改为 "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**阿里云OSS静态托管**"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"（国内CDN，可备案，费用极低）。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 整体数据流")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"┌─────────────────────────────────────────────────────┐")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│                    你的电脑              │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│                                        │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│  ┌─────────────┐    ┌─────────────────────────────┐│")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│  │  CouchDB   │    │     GitHub 笔记仓库      ││")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│  │  (草稿笔记) │    │     (稳定版笔记 .md文件)   ││")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│  └──────┬──────┘    └───────────────┬─────────────┘│")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│         │                           │   │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│         ▼                           ▼   │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│  ┌─────────────────────────────────────────────────┐│")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│  │           同步脚本（每次构建前自动运行）     ││")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│  │  couch_sync.js         git pull / submodu   ││")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│  └─────────────────────────┬───────────────────────┘│")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│                             │          │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│                             ▼          │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│                    VitePress 项目         │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│                    npm run build          │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"└─────────────────────────┬───────────────────────────┘")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                          │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                          ▼")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"              ┌───────────────────────┐")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"              │   阿里云OSS        │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"              │   静态网站托管      │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"              │   + CDN 加速       │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"              │   绑定你的域名      │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"              │   冀ICP备2026011691号 │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"              └───────────────────────┘")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                          │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                          ▼")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                  访客通过域名访问")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 技术栈一览")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| 层级 | 技术 | 用途 | 费用 |")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| --- | --- | --- | --- |")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| 框架 | VitePress | Markdown渲染、页面生成 | 免费 |")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| 草稿笔记 | CouchDB（本地） | 同步草稿区笔记 | 免费 |")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| 稳定笔记 | GitHub仓库 | 同步稳定版笔记 | 免费 |")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| 图片存储 | 阿里云OSS | 笔记图片CDN | 极低（已有） |")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| 网站托管 | 阿里云OSS静态托管 | 国内合规部署 | 约¥1-5/月 |")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| 域名 | 阿里云购买 | 绑定ICP | 约¥55/年 |")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"* * *")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"## 二、ICP备案与国内部署（重要前提）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 2.1 备案号的含义")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"你已有 "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**冀ICP备2026011691号**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"，说明：")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   ✅ 你已经完成了ICP备案流程")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   ✅ 你有一个备案过的域名")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   ⚠️ 网站必须部署在"),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**中国大陆服务器/CDN**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"上，否则违规")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 2.2 部署方案选择")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**推荐：阿里云OSS + CDN**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"（最适合静态网站）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"优点：")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   与你现有的OSS桶在同一平台，管理方便")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   支持绑定备案域名")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   国内访问速度极快")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   静态网站托管费用几乎可以忽略（按流量计费，个人博客月均¥1-3）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   支持HTTPS（免费SSL证书）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 2.3 需要准备的东西")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] 阿里云账号（已有）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] 备案域名（你的ICP备案对应的域名）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] 一个新的OSS Bucket用于托管网站（区别于存图片的桶）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"* * *")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"## 三、技术选型：VitePress + 阿里云OSS静态托管")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 为什么选 VitePress？")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| 特性 | 说明 |")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| --- | --- |")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| Markdown原生支持 | 笔记直接渲染，无需改格式 |")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| 组件化扩展 | 可嵌入Vue组件，拓展性极强 |")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| 构建产物纯静态 | 完美适配OSS静态托管 |")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| 搜索内置 | 无需服务器，本地索引 |")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| 主题生态丰富 | 可自定义到像素级 |")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| 新手友好 | 改配置文件即可，不需要写代码 |")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### VitePress 适合的页面类型（拓展性说明）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"VitePress 不只是笔记框架，它支持：")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   📝 笔记/文档页面（Markdown）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   🏠 自定义首页（Vue组件）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   🎮 互动页面（嵌入Vue/JS小组件）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   📊 数据展示页（图表、时间线）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   🖼️ 作品集页面")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   💬 带评论的博客")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   🔗 导航页/书签收藏")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"* * *")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"## 四、项目结构与初始化")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 4.1 安装环境")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**安装 Node.js（v20 LTS）**")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"1."),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  访问 &lt;https://nodejs.org/zh-cn>")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"2."),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  下载 LTS 版本，一路安装")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"3."),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  验证：")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"node -v    # v20.x.x")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"npm -v     # 10.x.x")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**安装 Git**")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"1."),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  访问 ["),s("span",{style:{"--shiki-light":"#032F62","--shiki-light-text-decoration":"underline","--shiki-dark":"#DBEDFF","--shiki-dark-text-decoration":"underline"}},"https://git-scm.com"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]("),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-text-decoration":"underline","--shiki-dark":"#E1E4E8","--shiki-dark-text-decoration":"underline"}},"https://git-scm.com/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") 下载安装")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"2."),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  验证：")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"git --version")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 4.2 创建项目")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 创建项目目录")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"mkdir my-website")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"cd my-website")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 初始化 npm")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"npm init -y")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 安装 VitePress")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"npm add -D vitepress")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 初始化 VitePress")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"npx vitepress init")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"初始化选项：")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"Where should VitePress initialize the config?  →  ./docs")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"Site title:  →  你的网站名（如：小书匠的花园）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"Site description:  →  笔记 · 创作 · 探索")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"Theme:  →  Default Theme")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"Use TypeScript?  →  No")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"Add VitePress npm scripts?  →  Yes")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 4.3 最终目录结构")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"my-website/")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"├── docs/")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│   ├── .vitepress/")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│   │   ├── config.mts          ← 核心配置（导航、侧边栏等）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│   │   ├── theme/")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│   │   │   ├── index.js        ← 主题入口（引入组件、样式）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│   │   │   └── style.css       ← 自定义样式")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│   │   └── components/         ← 自定义Vue组件（可选）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│   │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│   ├── index.md                ← 首页")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│   ├── about.md                ← 关于我")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│   │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│   ├── draft-notes/            ← 草稿笔记区（从CouchDB同步）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│   │   └── ["),s("span",{style:{"--shiki-light":"#032F62","--shiki-light-text-decoration":"underline","--shiki-dark":"#DBEDFF","--shiki-dark-text-decoration":"underline"}},"自动生成的.md文件"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│   │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│   ├── stable-notes/           ← 稳定笔记区（从GitHub同步）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│   │   └── ["),s("span",{style:{"--shiki-light":"#032F62","--shiki-light-text-decoration":"underline","--shiki-dark":"#DBEDFF","--shiki-dark-text-decoration":"underline"}},"子模块或同步的.md文件"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│   │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│   └── pages/                  ← 其他拓展页面")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│       ├── gallery.md          ← 图片墙/作品集")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│       ├── tools.md            ← 工具箱/导航页")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│       └── timeline.md         ← 时间线")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"├── scripts/")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│   └── couch_sync.js           ← CouchDB同步脚本")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"│")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"├── package.json")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"└── .gitignore")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"* * *")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"## 五、笔记双轨同步方案")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 5.1 稳定笔记：GitHub仓库同步（推荐方式）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**方法一：Git Submodule（推荐，自动化程度高）**")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 在项目根目录，将GitHub笔记仓库作为子模块引入")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"git submodule add https://github.com/iron-water/Great-notes.git docs/stable-notes")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 以后更新笔记时，运行：")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"git submodule update --remote docs/stable-notes")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"这样 "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`docs/stable-notes/`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 目录的内容会与你的 GitHub 笔记仓库保持同步。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**方法二：手动同步（更简单，适合新手）**")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 在电脑另一个位置克隆你的笔记仓库")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"git clone https://github.com/你的用户名/your-notes-repo.git")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 每次更新网站前，手动将 .md 文件复制到 docs/stable-notes/")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 或写一个简单的复制脚本")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**方法三：GitHub Actions自动拉取（全自动）**")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"在 "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`.github/workflows/sync.yml`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 中配置，每次笔记仓库更新时自动触发网站重新构建（进阶，暂时可以跳过）。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 5.2 草稿笔记：CouchDB同步")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**原理**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"：写一个脚本，在每次 "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`npm run build`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 之前，自动连接本地CouchDB，读取所有文档，转换为 "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`.md`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 文件，保存到 "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`docs/draft-notes/`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**第一步：安装依赖**")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"npm install nano    # CouchDB 的 Node.js 客户端")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**第二步：创建同步脚本**")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"新建 "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`scripts/couch_sync.js`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"：")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"/**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}}," *"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," CouchDB → Markdown 同步脚本")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}}," *"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 运行方式：node scripts/couch_sync.js")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}}," *"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}}," *"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 使用前请修改以下配置：")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," */")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"const nano = require('nano');")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"const fs = require('fs');")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"const path = require('path');")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"// ===== 配置区（修改这里）=====")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"const COUCHDB_URL = 'http://anno:unknowdw221@localhost:5984';  // CouchDB连接地址")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"const DATABASE_NAME = 'anno';                        // 数据库名")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"const OUTPUT_DIR = path.join(__dirname, '../docs/draft-notes'); // 输出目录")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"// ==============================")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"const db = nano(COUCHDB_URL).db.use(DATABASE_NAME);")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"async function sync() {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  console.log('🔄 开始同步 CouchDB 草稿...');")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  // 清空输出目录（重新生成）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  if (fs.existsSync(OUTPUT_DIR)) {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fs.rmSync(OUTPUT_DIR, { recursive: true });")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  fs.mkdirSync(OUTPUT_DIR, { recursive: true });")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  // 获取所有文档")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  const result = await db.list({ include_docs: true });")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  const docs = result.rows")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    .map(row => row.doc)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    .filter(doc => !doc."),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-style":"italic","--shiki-dark":"#E1E4E8","--shiki-dark-font-style":"italic"}},"_id.startsWith('_"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"'));"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," // 过滤系统文档")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  let count = 0;")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  for (const doc of docs) {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    // 跳过没有内容的文档")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    if (!doc.content && !doc.md && !doc.body && !doc.text) continue;")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    // 获取笔记内容（兼容不同字段名）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    const content = doc.content || doc.md || doc.body || doc.text || '';")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    // 获取笔记标题")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    const title = doc.title || doc.name || doc._id;")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    // 获取日期")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    const date = doc.updated_at || doc.created_at || new Date().toISOString().split('T')["),s("span",{style:{"--shiki-light":"#032F62","--shiki-light-text-decoration":"underline","--shiki-dark":"#DBEDFF","--shiki-dark-text-decoration":"underline"}},"0"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    // 获取标签")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    const tags = Array.isArray(doc.tags) ? doc.tags : [];")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    // 生成文件名（过滤非法字符）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    const filename = title")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'      .replace(/[&lt;>:"/'),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\\\"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"|?*\\s]/g, '-')")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      .replace(/-+/g, '-')")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      .toLowerCase()")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      .slice(0, 60) + '.md';")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    // 生成 Frontmatter + 内容")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    const mdContent = `---")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'title: "${title}"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"date: ${date}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"tags: [${tags.map(t => "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'`"${t}"`'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},").join(', ')}]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"source: CouchDB")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"draft: true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"${content}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"`;")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fs.writeFileSync(path.join(OUTPUT_DIR, filename), mdContent, 'utf-8');")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    count++;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  // 生成草稿区首页索引")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  const indexContent = `---")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"title: 草稿笔记")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 📝 草稿笔记")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> 这里是我的草稿区，存放尚未整理完成的笔记。内容可能不完整，仅供参考。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"共 ${count} 篇草稿")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"`;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.md'), indexContent, 'utf-8');")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  console.log("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`✅ 同步完成！共导出 ${count} 篇草稿笔记`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"sync().catch(err => {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  console.error('❌ 同步失败：', err.message);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  console.error('提示：请确认 CouchDB 正在运行，并检查连接地址和密码');")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  process.exit(1);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"});")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**第三步：配置构建脚本**")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"修改 "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`package.json`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"，让构建前自动运行同步脚本：")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'  "scripts": {')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    "docs:dev": "vitepress dev docs",')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    "docs:build": "node scripts/couch_sync.js && vitepress build docs",')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    "docs:preview": "vitepress preview docs",')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    "sync:couch": "node scripts/couch_sync.js",')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    "sync:github": "git submodule update --remote docs/stable-notes",')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    "sync:all": "npm run sync:couch && npm run sync:github",')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    "deploy": "npm run docs:build && node scripts/deploy_oss.js"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ⚠️ "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**注意**"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"：CouchDB同步脚本只在你"),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**本地电脑**"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"运行时生效（因为CouchDB在本地）。草稿区的内容需要你在本地构建后，再将构建产物上传到阿里云OSS。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 5.3 侧边栏配置（双轨导航）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"在 "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`docs/.vitepress/config.mts`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 中配置：")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"sidebar: {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  // 草稿区侧边栏")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  '/draft-notes/': [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      text: '📝 草稿笔记',")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      collapsed: false,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      items: [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        { text: '草稿索引', link: '/draft-notes/' },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        // 草稿文件由脚本自动生成，侧边栏可以用动态方式加载")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        // 见下方"自动生成侧边栏"小节')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      ]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ],")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  // 稳定笔记侧边栏")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  '/stable-notes/': [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      text: '📚 稳定笔记',")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      collapsed: false,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      items: [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        { text: '笔记首页', link: '/stable-notes/' },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        // 按你的GitHub仓库目录结构手动添加，或使用自动生成方案")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      ]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**自动生成侧边栏（推荐，避免手动维护）：**")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"安装插件：")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"npm install -D vitepress-sidebar")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"在 "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`config.mts`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 中使用：")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"import { generateSidebar } from 'vitepress-sidebar';")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"export default defineConfig({")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  themeConfig: {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    sidebar: generateSidebar([")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        documentRootPath: 'docs',")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        scanStartPath: 'draft-notes',")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        resolvePath: '/draft-notes/',")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        useTitleFromFrontmatter: true,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        sortMenusByFrontmatterDate: true,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        documentRootPath: 'docs',")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        scanStartPath: 'stable-notes',")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        resolvePath: '/stable-notes/',")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        useTitleFromFrontmatter: true,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        sortMenusByFrontmatterDate: true,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ])")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"* * *")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"## 六、网站整体架构设计（拓展性）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 6.1 导航栏设计（多板块结构）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"nav: [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  { text: '🏠 首页', link: '/' },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    text: '📚 笔记',")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    items: [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      { text: '稳定笔记（GitHub同步）', link: '/stable-notes/' },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      { text: '草稿笔记（CouchDB同步）', link: '/draft-notes/' },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    text: '🎨 创作',")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    items: [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      { text: '作品集', link: '/pages/gallery' },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      { text: '时间线', link: '/pages/timeline' },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    text: '🛠️ 工具箱',")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    items: [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      { text: '导航收藏', link: '/pages/tools' },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      { text: '在线工具', link: '/pages/online-tools' },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  { text: '💬 关于我', link: '/about' }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 6.2 各板块页面说明")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"#### 🏠 首页（"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"`docs/index.md`"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"首页是网站门面，采用 VitePress 内置的 Home Layout，支持：")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   Hero区：标题、标语、按钮、头像")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   Features区：各板块卡片入口")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   自定义插槽：可插入动画、公告等组件")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"layout: home")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"hero:")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'  name: "你的网站名"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'  text: "笔记 · 创作 · 探索"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  tagline: 记录生活，分享思考")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  image:")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    src: http://xiaoshujiangaly1.oss-cn-beijing.aliyuncs.com/assets/avatar.png")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    alt: 头像")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  actions:")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    - theme: brand")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      text: 稳定笔记 →")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      link: /stable-notes/")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    - theme: alt")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      text: 草稿区")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      link: /draft-notes/")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"features:")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  -"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," icon: 📚")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    title: 稳定笔记")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    details: 经过整理的完整笔记，持续更新")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    link: /stable-notes/")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  -"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," icon: 📝")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    title: 草稿区")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    details: 未整理的想法和草稿，真实记录思考过程")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    link: /draft-notes/")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  -"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," icon: 🎨")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    title: 作品集")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    details: 我的创作与项目展示")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    link: /pages/gallery")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  -"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," icon: 🛠️")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    title: 工具箱")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    details: 常用工具收藏与导航")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    link: /pages/tools")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"#### 📚 稳定笔记区（"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"`docs/stable-notes/`"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   内容来自GitHub仓库，经过整理、结构清晰")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   建议在你的GitHub笔记仓库中按分类建立目录")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   侧边栏自动生成")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"#### 📝 草稿笔记区（"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"`docs/draft-notes/`"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   内容来自CouchDB，由脚本自动生成")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'   可在首页标注"⚠️ 草稿内容，可能不完整"提示')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   建议加一个醒目的页面头部说明")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"在 "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`docs/.vitepress/theme/index.js`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 中，可以为草稿区页面自动加上提示横幅（进阶，后续可做）。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"#### 🎨 作品集（"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"`docs/pages/gallery.md`"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"title: 作品集")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"layout: page")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 🎨 我的作品")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'&lt;div class="gallery-grid">')]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"## 项目一：XXX")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"!["),s("span",{style:{"--shiki-light":"#032F62","--shiki-light-text-decoration":"underline","--shiki-dark":"#DBEDFF","--shiki-dark-text-decoration":"underline"}},"项目截图"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]("),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-text-decoration":"underline","--shiki-dark":"#E1E4E8","--shiki-dark-text-decoration":"underline"}},"http://xiaoshujiangaly1.oss-cn-beijing.aliyuncs.com/gallery/project1.png"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"描述文字...")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"#### 🛠️ 工具箱/导航页（"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"`docs/pages/tools.md`"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"这类页面可以做成一个带分类的链接收藏站，是非常实用的个人工具。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"#### 📅 时间线（"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"`docs/pages/timeline.md`"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"用于记录个人成长历程、博客更新记录等。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"* * *")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"## 七、ICP备案号配置")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 7.1 在网站底部显示备案号")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"编辑 "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`docs/.vitepress/theme/index.js`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"：")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"import DefaultTheme from 'vitepress/theme'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"import { h } from 'vue'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"import './style.css'")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"// 自定义底部备案号组件")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"const IcpFooter = {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  template: `")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    &lt;div class="icp-footer">')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'      &lt;a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        冀ICP备2026011691号")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      &lt;/a>")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  `")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"export default {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  extends: DefaultTheme,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  Layout() {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    return h(DefaultTheme.Layout, null, {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      'layout-bottom': () => h(IcpFooter)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    })")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"在 "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`docs/.vitepress/theme/style.css`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 中添加样式：")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"/* ICP备案号样式 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".icp-footer {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  text-align: center;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  padding: 12px 0 20px;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  font-size: 13px;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  color: var(--vp-c-text-3);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".icp-footer a {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  color: var(--vp-c-text-3);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  text-decoration: none;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  transition: color 0.2s;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".icp-footer a:hover {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  color: var(--vp-c-brand-1);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 7.2 也可以在 config.mts 的 footer 中添加")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"themeConfig: {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  footer: {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    message: '用热爱构建',")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},`    copyright: 'Copyright © 2025 你的名字 | &lt;a href="https://beian.miit.gov.cn/" target="_blank">冀ICP备2026011691号&lt;/a>'`)]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ⚠️ VitePress 的 "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`footer.copyright`"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}}," 支持HTML，直接写链接即可。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"* * *")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"## 八、部署到阿里云OSS静态网站托管")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 8.1 创建用于托管网站的 OSS Bucket")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> 注意：建议新建一个专门用于网站托管的桶，与存图片的桶分开。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"1."),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  登录阿里云控制台 → 对象存储OSS")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"2."),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  创建Bucket：")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"    *"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   名称："),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`my-website`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"（随意）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"    *"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   地域："),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**华北2（北京）**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"（与备案地址一致）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"    *"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   读写权限："),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**公共读**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"3."),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  进入该Bucket → "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**基础设置**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," → "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**静态页面**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"：")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"    *"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   默认首页："),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`index.html`")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"    *"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   默认404页："),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`404.html`")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"    *"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   开启：✅")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 8.2 绑定自定义域名")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"1."),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  进入Bucket → 传输管理 → 绑定用户域名")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"2."),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  填入你的备案域名（如 "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`www.yourdomain.com`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"3."),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  开启 HTTPS（申请免费SSL证书）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"4."),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  在你的域名DNS解析中，添加CNAME记录指向OSS提供的地址")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 8.3 安装 OSS 部署工具")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 安装阿里云OSS命令行工具")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"npm install -D ali-oss")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 或者使用 ossutil（阿里云官方CLI）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 下载地址：https://help.aliyun.com/document_detail/120075.html")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**创建部署脚本**"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," `scripts/deploy_oss.js`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"：")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"const OSS = require('ali-oss');")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"const fs = require('fs');")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"const path = require('path');")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"// ===== 配置区 =====")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"const config = {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  region: 'oss-cn-beijing',")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  accessKeyId: process.env.OSS_KEY_ID,       // 从环境变量读取，不要硬写到代码里！")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  accessKeySecret: process.env.OSS_KEY_SECRET,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  bucket: 'my-website',                       // 你的网站桶名")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"};")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"const DIST_DIR = path.join(__dirname, '../docs/.vitepress/dist');")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"// ==================")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"const client = new OSS(config);")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"async function uploadDir(localDir, ossDir = '') {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  const files = fs.readdirSync(localDir, { withFileTypes: true });")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  for (const file of files) {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    const localPath = path.join(localDir, file.name);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    const ossPath = ossDir ? "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`${ossDir}/${file.name}`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," : file.name;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    if (file.isDirectory()) {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      await uploadDir(localPath, ossPath);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    } else {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      await client.put(ossPath, localPath);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      process.stdout.write("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`✅ ${ossPath}\\n`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"async function deploy() {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  console.log('🚀 开始部署到阿里云OSS...');")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  await uploadDir(DIST_DIR);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  console.log('🎉 部署完成！');")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"deploy().catch(err => {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  console.error('❌ 部署失败：', err.message);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  process.exit(1);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"});")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**设置环境变量**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"（Windows PowerShell）：")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'$env:OSS_KEY_ID="你的AccessKey ID"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'$env:OSS_KEY_SECRET="你的AccessKey Secret"')]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> 💡 AccessKey在阿里云控制台右上角头像 → AccessKey管理 中创建。"),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**请勿将密钥写入代码或提交到GitHub！**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 8.4 一键部署命令")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 完整流程：同步笔记 → 构建 → 部署")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"npm run deploy")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"对应的 "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`package.json`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 脚本：")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'"deploy": "npm run sync:all && npm run docs:build && node scripts/deploy_oss.js"')]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"* * *")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"## 九、维护性方向")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 🟢 基础层（建立后几乎不需要改动）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**① 文件命名规范**")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   Markdown文件：全英文小写 + 连字符（"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`my-note.md`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   目录名：同上")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   OSS图片："),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`年份-月份-关键词.png`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"（如 "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`2025-04-linux-shell.png`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**② Frontmatter规范**")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"每篇笔记统一格式：")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'title: "笔记标题"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"date: 2025-04-14")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'tags: ["Linux", "工具"]')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'description: "简短描述，用于搜索和SEO"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**③ .gitignore 配置**")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"node_modules/")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"docs/.vitepress/dist/")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"docs/.vitepress/cache/")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"docs/draft-notes/        # 草稿由本地脚本生成，不提交到git")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".env                     # 密钥文件，绝对不能提交")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".DS_Store")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**④ 环境变量文件**")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"新建 "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`.env.local`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"（不提交git）：")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"OSS_KEY_ID=你的KeyID")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"OSS_KEY_SECRET=你的KeySecret")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"COUCHDB_PASSWORD=你的CouchDB密码")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"修改脚本读取："),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`process.env.OSS_KEY_ID`")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 🟡 内容层（定期维护）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**⑤ 定期更新稳定笔记**")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'建立"笔记晋级"习惯：')]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   CouchDB草稿写完 → 整理后推送到GitHub笔记仓库 → 自动出现在稳定区")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**⑥ 检查死链**")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"每季度运行一次：")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"npx markdown-link-check docs/stable-notes/*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-style":"italic","--shiki-dark":"#E1E4E8","--shiki-dark-font-style":"italic"}},"*/*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".md")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**⑦ 图片管理**")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   OSS图片按年份/分类管理，不要乱放")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   旧图片定期清理（OSS控制台可查看使用情况）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 🔵 运营层（有需要时做）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**⑧ 网站访问统计**")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"在 "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`config.mts`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 中加入统计代码（推荐百度统计，国内合规）：")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"head: [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ['script', {}, `")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    var _hmt = _hmt || [];")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    (function() {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'      var hm = document.createElement("script");')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'      hm.src = "https://hm.baidu.com/hm.js?你的统计ID";')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      document.head.appendChild(hm);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    })();")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  `]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**⑨ 评论系统**")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"推荐 giscus（基于GitHub Discussions，免费）或 Twikoo（国内服务，需要小程序云或Vercel）。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**⑩ SEO优化**")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"在 "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`config.mts`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 中：")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"export default defineConfig({")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  sitemap: {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    hostname: 'https://你的域名.com'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  // ...")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"* * *")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"## 十、网站升级方向")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 🌱 阶段一：建立基础（第1个月）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] 完成环境搭建和初次部署")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] CouchDB同步脚本调试成功")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] GitHub笔记仓库接入")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] ICP备案号显示在底部")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] 首页完成基本设计")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 🌿 阶段二：内容与视觉（第2-3个月）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**自定义主题色**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"（改CSS变量，5分钟）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**暗黑/浅色模式**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"（VitePress默认已支持，检查样式即可）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**页面过渡动画**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"（CSS animation，约30分钟）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**首页动态欢迎语**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'（JS实现，按时间段显示"早上好/下午好"）')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**文章阅读进度条**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"（顶部横条，增加阅读体验）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**图片点击放大**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"（安装 "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`medium-zoom`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"，5分钟）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"npm install medium-zoom")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**Mermaid流程图支持**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"（在笔记中画图）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**数学公式**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"（如有理工科笔记需求）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 🌳 阶段三：功能扩展（第4-6个月）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**评论系统接入**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"（giscus 或 Twikoo）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**标签云页面**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"：按标签浏览所有笔记")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**时间线页面**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"：用Vue组件实现视觉时间轴")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**作品集/Gallery页面**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"：图片展示、项目卡片")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**导航/工具箱页面**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"：个人常用链接收藏")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**RSS订阅**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"（安装 "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`vitepress-plugin-rss`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 🚀 阶段四：进阶互动（6个月以上）")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**搜索升级**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"：将内置本地搜索升级为 Algolia（更快更精准，免费申请开源计划）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**PWA支持**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"：网站可安装到桌面，支持离线浏览")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**嵌入小组件**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"：用Vue组件在页面中嵌入计算器、倒计时等互动元素")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**CouchDB自动同步**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"：配置定时任务，无需手动触发脚本")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**草稿区私密访问**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"：给草稿区加密码保护（"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`vitepress-plugin-page-encrypt`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**国内CDN加速**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"：为OSS配置阿里云CDN，提升全国访问速度")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [ ] "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**多语言支持**"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"：VitePress内置i18n，可一键添加英文版")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"* * *")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"## 十一、快速参考卡")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 日常操作命令")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 本地预览（包含CouchDB草稿同步）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"npm run docs:dev")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 仅同步CouchDB草稿（不启动预览）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"npm run sync:couch")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 仅更新GitHub稳定笔记")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"npm run sync:github")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 同步所有笔记")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"npm run sync:all")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 构建网站（自动同步CouchDB后构建）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"npm run docs:build")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 一键部署到阿里云OSS")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"npm run deploy")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 发布流程")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"1"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\."),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 在CouchDB中写草稿（照旧）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"2"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\."),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 整理完的笔记推送到GitHub笔记仓库")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"3"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\."),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 在网站项目目录运行：npm run deploy")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"4"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\."),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 等待约1分钟，网站自动更新")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 重要文件速查")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| 文件 | 用途 |")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| --- | --- |")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`docs/.vitepress/config.mts`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," | 导航、侧边栏、网站基础配置 |")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`docs/.vitepress/theme/style.css`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," | 全局样式、主题色 |")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`docs/.vitepress/theme/index.js`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," | 组件注册、ICP底部 |")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`docs/index.md`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," | 网站首页内容 |")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`docs/draft-notes/`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," | 草稿区（脚本自动生成，勿手动编辑） |")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`docs/stable-notes/`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," | 稳定笔记区（GitHub同步） |")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`scripts/couch_sync.js`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," | CouchDB同步脚本 |")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`scripts/deploy_oss.js`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," | 部署脚本 |")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"| "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"`.env.local`"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," | 密钥配置（不提交git！） |")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"### 重要链接")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   VitePress文档：https://vitepress.dev/zh/")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   阿里云OSS静态托管：https://help.aliyun.com/document_detail/31872.html")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   工信部备案查询：https://beian.miit.gov.cn/")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   vitepress-sidebar插件：https://vitepress-sidebar.cdget.com/")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"*"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   giscus评论：https://giscus.app/zh-CN")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"* * *")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> 📌 "),s("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**本文档版本：v2.0 | 2025年4月**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> 主要变更：新增ICP合规部署方案、CouchDB草稿同步脚本、双轨笔记架构、多板块网站结构")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"> ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},">")])])])])],-1)])])}const o=l(t,[["render",k]]);export{c as __pageData,o as default};
