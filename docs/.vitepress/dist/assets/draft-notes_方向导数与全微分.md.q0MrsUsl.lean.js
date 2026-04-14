import{_ as l,o as n,c as t,j as i,a as s}from"./chunks/framework.DeBUZsJm.js";const o=JSON.parse('{"title":"方向导数与全微分","description":"","frontmatter":{"title":"方向导数与全微分","date":"2026-04-14T00:00:00.000Z","tags":[],"source":"CouchDB","draft":true},"headers":[],"relativePath":"draft-notes/方向导数与全微分.md","filePath":"draft-notes/方向导数与全微分.md"}'),h={name:"draft-notes/方向导数与全微分.md"};function e(k,a,E,d,r,p){return n(),t("div",null,[...a[0]||(a[0]=[i("div",null,[i("h1",{id:"笔记源码预览",tabindex:"-1"},[s("笔记源码预览 "),i("a",{class:"header-anchor",href:"#笔记源码预览","aria-label":'Permalink to "笔记源码预览"'},"​")]),i("div",{class:"language-markdown vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"markdown"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"title: 方向导数与全微分")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"tags: 数学,脑图下属,working")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"cover: '![]("),i("span",{style:{"--shiki-light":"#24292E","--shiki-light-text-decoration":"underline","--shiki-dark":"#E1E4E8","--shiki-dark-text-decoration":"underline"}},"https://xiaoshujiangaly1.oss-cn-beijing.aliyuncs.com/小书匠/09e2f9e746fbd08fe68afcac293d12e3.png"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"emoji: 🍉")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"前言：已经在["),i("span",{style:{"--shiki-light":"#032F62","--shiki-light-text-decoration":"underline","--shiki-dark":"#DBEDFF","--shiki-dark-text-decoration":"underline"}},"这里"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]("),i("span",{style:{"--shiki-light":"#24292E","--shiki-light-text-decoration":"underline","--shiki-dark":"#E1E4E8","--shiki-dark-text-decoration":"underline"}},"xsjapp://doc/3dbf415d-acd8-42f4-b95a-285b2854d52a"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")写过了，炒一下冷饭；这种知识碎片我会尽量写得简练和结构性强一点，阅读难度稍高")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 1.前置知识")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$R^n$中的向量结构🗓️")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"["),i("span",{style:{"--shiki-light":"#032F62","--shiki-light-text-decoration":"underline","--shiki-dark":"#DBEDFF","--shiki-dark-text-decoration":"underline"}},"简单的点集拓扑"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]("),i("span",{style:{"--shiki-light":"#24292E","--shiki-light-text-decoration":"underline","--shiki-dark":"#E1E4E8","--shiki-dark-text-decoration":"underline"}},"xsjapp://doc/322d7222-dc04-4343-b43e-04068b943cc9"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")🚧⚠️")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"# 2.正文开始")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"先考虑$f: D \\to \\mathbb{R}$，这里的$D$指的是$R^n$上的一个子集。")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"根据简单的一元函数微分定义，照猫画虎地给一个类似的定义：")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},`&lt;div class="math-container" style="--head-bg: #4caf50; --head-font: 'Smiley Sans'; --content-font: 'Kaiti';">`)]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    &lt;div class="math-header">')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        &lt;span>标号 定义&lt;/span>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        &lt;span style="opacity: 0.8;">♣&lt;/span>')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    &lt;div class="math-content">')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        正文")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"我们首先要关心的就是它的唯一性，用反证法可以速证：")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},`&lt;div class="proof-block" style="--proof-font: 'SimSun';">`)]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    &lt;span class="proof-title">证明&lt;/span>')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    &lt;div>假设有两个线性函数满足全微分的定义：")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$$\\lim_{h \\to 0} \\frac{\\Delta f(x; h) - L_1(h)}{\\|h\\|} = 0$$$$\\lim_{h \\to 0} \\frac{\\Delta f(x; h) - L_2(h)}{\\|h\\|} = 0$$")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"定义$L(h) = L_1(h) - L_2(h)$，显然$\\lim_{h \\to 0} \\frac{L(h)}{\\|h\\|} = 0$，令$h=tv,t\\in\\mathbb{R}$而很容易写出$\\|h\\|=\\|t\\|\\|v\\|$，$L(h) = L(tv) = tL(v)$.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"也就是$$\\lim_{t \\to 0} \\frac{t}{\\|t\\|} \\cdot \\frac{L(v)}{\\|v\\|} = \\lim_{t \\to 0} sgn(t) \\cdot \\frac{L(v)}{\\|v\\|} = \\lim_{t \\to 0}  \\frac{L(v)}{\\|v\\|}=0$$当且仅当$L(v)=0$，即$L(h)=0$.")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"进一步地，考虑不同范式下的唯一性.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"有限维空间范数等价性：设$V$是有有限维向量空间（如$\\mathbb{R}^n$），则任意两个范数$\\|\\cdot\\|_A$和$\\|\\cdot\\|_B$等价，即存在常数$c, C > 0$使得：$c \\|v\\|_A \\leq \\|v\\|_B \\leq C \\|v\\|_A, \\quad \\forall v \\in V.$")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"假设在范数$\\|\\cdot\\|$下，$L$是$f$在$a$点的微分：")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$$\\lim_{h \\to 0} \\frac{f(a+h) - f(a) - L(h)}{\\|h\\|} = 0$$")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"换用另一范数$\\|\\cdot\\|"),i("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-style":"italic","--shiki-dark":"#E1E4E8","--shiki-dark-font-style":"italic"}},"_*$, 由于范数等价：$\\frac{1}{C} \\|h\\| \\leq \\|h\\|_"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"* \\leq C \\|h\\|$")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"考察新范数下的极限：")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$$\\left| \\frac{f(a+h) - f(a) - L(h)}{\\|h\\|_*} \\right| \\leq \\frac{|f(a+h) - f(a) - L(h)|}{c \\|h\\|} = \\frac{1}{c} \\cdot \\left| \\frac{f(a+h) - f(a) - L(h)}{\\|h\\|} \\right|$$")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"当$\\|h\\|_* \\to 0$时，由等价性知$\\|h\\| \\to 0$，因此右边$\\to 0$。")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"故当$L$在范数$\\|\\cdot\\|$下是微分时，它在任何等价范数$\\|\\cdot\\|_*$下也是微分。")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'&lt;span class="qed-sign">Q.E.D. ■&lt;/span>')])])])])],-1)])])}const g=l(h,[["render",e]]);export{o as __pageData,g as default};
