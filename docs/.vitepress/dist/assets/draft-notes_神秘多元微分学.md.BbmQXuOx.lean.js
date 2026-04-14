import{_ as l,o as n,c as t,j as i,a as s}from"./chunks/framework.DeBUZsJm.js";const c=JSON.parse('{"title":"神秘多元微分学","description":"","frontmatter":{"title":"神秘多元微分学","date":"2026-04-14T00:00:00.000Z","tags":[],"source":"CouchDB","draft":true},"headers":[],"relativePath":"draft-notes/神秘多元微分学.md","filePath":"draft-notes/神秘多元微分学.md"}'),e={name:"draft-notes/神秘多元微分学.md"};function h(E,a,k,d,p,r){return n(),t("div",null,[...a[0]||(a[0]=[i("div",null,[i("h1",{id:"笔记源码预览",tabindex:"-1"},[s("笔记源码预览 "),i("a",{class:"header-anchor",href:"#笔记源码预览","aria-label":'Permalink to "笔记源码预览"'},"​")]),i("div",{class:"language-markdown vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"markdown"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-light-font-weight":"bold","--shiki-dark":"#79B8FF","--shiki-dark-font-weight":"bold"}},"---")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"---==作者的话 #EE3F4D==："),i("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**markdowm好麻烦！**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"从零开始的异世界多元微分学生活！")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"我们这里从最简单的动机开始考虑多元微积分的事情")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"我们已经知道一元微积分的定义了：")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$$\\frac{df}{dx} = \\lim_{t \\to 0} \\frac{f(x_0 + t) - f(x_0)}{t}$$")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"这里$f$是函数名,$x$自变量名,$t$是参数名。")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"很自然的，我们生活中遇到的一个因变量经常与很多其他多个自变量相关，举例说就有山峰的表面积、产品的利润、曲面的梯度等等.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"在一元函数中我们研究函数的方式是考虑$f$在极小范围内的变动，把这个思想同样引入多元函数要怎么操作呢？")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"举个例子好了，设$f(x,y) = x + y$，然后$x$,$y$同时开始变动：")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$$f(x+\\Delta x, y+\\Delta y) = f(x,y) + \\Delta f(x,y) = x + \\Delta x + y + \\Delta y$$")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"容易得到$\\Delta f(x,y) = \\Delta x  + \\Delta y$")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"这非常符合预期！")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"进一步升级，设$f(x, y) = x^2 + y^2$，然后重复操作得到：$$\\Delta f(x,y) = 2\\Delta x + 2\\Delta y + \\Delta x^2 + \\Delta y^2$$")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'这里我们对比一下一元函数微分的定义：&lt;span id="my-point">&lt;/span>   &lt;!-- 定义锚点 -->')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},`&lt;div class="math-container" style="--head-bg: #90EE90; --head-font: 'Smiley Sans'; --content-font: 'Kaiti';">`)]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    &lt;div class="math-header">')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        &lt;span>01.1 一元函数的微分&lt;/span>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        &lt;span style="opacity: 0.8;">♣&lt;/span>')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    &lt;div class="math-content">')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"设函数 $f$ 在 $x_0$ 的一个邻域 $N(x_0)$ 上有定义, 若存在 $\\lambda \\in \\mathbb{R}$ 使得 $$\\Delta f(x_0) = \\lambda \\Delta x + o(\\Delta x), \\Delta x \\to 0.$$ 则称函数在 $x_0$ 处可微 (differentiable). 关于 $\\Delta x$ 的线性函数 $\\lambda \\Delta x$ 称为函数 $f$ 在 $x_0$ 处的微分 (differential), 记作 $df(x_0) = \\lambda \\Delta x$, 其中 $\\lambda = f'(x_0)$. 特别地, 对于正比例函数 $g(x) = x$, 由于 $g'(x) = 1$, 故 $dg(x) = dx = \\Delta x$. 于是有 $df(x_0) = f'(x_0)dx$.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"可见我们希望$\\Delta f(x,y)$的主要部分应当最好也是$\\Delta x$、$\\Delta y$与常数线性组合的模样；而剩余的那么“一点点”则我们猜想用一种“变动越小它也越小”的东西来标记它，那么“距离”["),i("span",{style:{"--shiki-light":"#032F62","--shiki-light-text-decoration":"underline","--shiki-dark":"#DBEDFF","--shiki-dark-text-decoration":"underline"}},"^1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]可能很不错：")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"这里我们直接定义全增量为$h = (h_1, h_2, \\dots, h_n)$，那么自然距离就是 $\\|h\\|$.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"下面直接给出我们理想中的“无穷小增量公式”：")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"&lt;center>")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$f(x_0 + h) - f(x_0) = \\lambda h + o(\\|h\\|)$,$\\|h\\| \\to 0$&lt;/center>")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"很自然地，引出多元函数的相应定义：")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},`&lt;div class="math-container" style="--head-bg: #4caf50; --head-font: 'Smiley Sans'; --content-font: 'Kaiti';">`)]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    &lt;div class="math-header">')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        &lt;span>1.1 多元函数的全微分&lt;/span>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        &lt;span style="opacity: 0.8;">♣&lt;/span>')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    &lt;div class="math-content">')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   设函数 $f : D \\to \\mathbb{R}$, 其中 $D$ 是 $\\mathbb{R}^n$ 上的一个开集. 给定 $x_0 \\in D$. 若存在 $\\lambda = (\\lambda_1, \\lambda_2, \\cdots, \\lambda_n)$ 使得 $$f(x_0 + h) - f(x_0) = \\lambda h + o(\\|h\\|), \\|h\\| \\to 0,$$其中 $h = (h_1, h_2, \\cdots, h_n)^T$ 是全增量, 则称函数 $f$ 在点 $x_0$ 处可微 (differentiable). 并称关于 $h$ 的线性映射 $\\lambda h$ 为 $f$ 在 $x_0$ 处的全微分 (total differential), 简称微分. 记作 $df(x_0) = \\lambda h$. 若 $f$ 在 $D$ 上的每一点都可微, 则称 $f$ 是 $D$ 上的一个可微函数 (differentiable function).")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-style":"italic","--shiki-dark":"#E1E4E8","--shiki-dark-font-style":"italic"}},"_（为什么用开集呢，是因为内点定义就是移动足够小的一段距离，它还在定义域内）_")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"你可能注意到了这里用的是全微分而不是微分，这是因为还有++偏微分++这种东西：")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"试想$x = (x_1, x_2, \\dots, x_n)$中仅有$x_i$移动，那么其他的变量和常量没有区别，也就相当于形形色色的参数，那我们再对这种函数求微分，和一元函数微积分没有什么区别，得到的东西就叫偏微分：")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},`&lt;div class="math-container" style="--head-bg: #4caf50; --head-font: 'Smiley Sans'; --content-font: 'Kaiti';">`)]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    &lt;div class="math-header">')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        &lt;span>1.2  多元函数的偏微分&lt;/span>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        &lt;span style="opacity: 0.8;">♣&lt;/span>')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    &lt;div class="math-content">')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"设函数 $f: D \\to \\mathbb{R}$，其中 $D \\subseteq \\mathbb{R}^n$ 为开集，$x_0 = (x_1, x_2, \\cdots, x_n) \\in D$。若将除 $x_i$ 外的其余自变量固定，视 $f$ 为关于 $x_i$ 的一元函数，且存在 $\\lambda_i \\in \\mathbb{R}$ 使得$$\\Delta_{x_i} f(x_0) = f(x_1, \\cdots, x_i + \\Delta x_i, \\cdots, x_n) - f(x_0) = \\lambda_i \\Delta x_i + o(\\Delta x_i), \\Delta x_i \\to 0$$则称函数在 $x_0$ 处关于 $x_i$ "),i("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**偏可微**"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (partially differentiable)。关于 $\\Delta x_i$ 的线性函数 $\\lambda_i \\Delta x_i$ 称为函数 $f$ 在 $x_0$ 处关于 $x_i$ 的"),i("span",{style:{"--shiki-light":"#24292E","--shiki-light-font-weight":"bold","--shiki-dark":"#E1E4E8","--shiki-dark-font-weight":"bold"}},"**偏微分**"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (partial differential)，记作$d_{x_i} f(x_0) = \\lambda_i \\Delta x_i$其中 $\\lambda_i = f'_{x_i}(x_0)$（即偏导数 $\\frac{\\partial f}{\\partial x_i}$）。特别地，对于坐标投影函数 $g(x) = x_i$，由于 $g'_{x_i}(x) = 1$，故$d g(x) = d x_i = \\Delta x_i$于是有$d_{x_i} f(x_0) = \\frac{\\partial f(x_0)}{\\partial x_i} dx_i$")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"等等，这里的偏导数又是什么东西，哦，原来在多元函数的世界里面连导数都有一点点小变化，让我们先忽略这里的$\\lambda$ 究竟是什么——")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"在一元函数的世界里面，可导和可微是一个概念，在["),i("span",{style:{"--shiki-light":"#032F62","--shiki-light-text-decoration":"underline","--shiki-dark":"#DBEDFF","--shiki-dark-text-decoration":"underline"}},"上文"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]("),i("span",{style:{"--shiki-light":"#24292E","--shiki-light-text-decoration":"underline","--shiki-dark":"#E1E4E8","--shiki-dark-text-decoration":"underline"}},"#my-point"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")中的")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"这里我们引入一个多元函数$f(x, y)$来考虑.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"如果用["),i("span",{style:{"--shiki-light":"#032F62","--shiki-light-text-decoration":"underline","--shiki-dark":"#DBEDFF","--shiki-dark-text-decoration":"underline"}},"这里"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]("),i("span",{style:{"--shiki-light":"#24292E","--shiki-light-text-decoration":"underline","--shiki-dark":"#E1E4E8","--shiki-dark-text-decoration":"underline"}},"https://github.com/iron-water/Great-notes/blob/main/%E6%95%B0%E5%AD%A6/%E6%95%B0%E5%AD%A6%E5%88%86%E6%9E%90/%E8%AF%BE%E6%9C%AC%E8%B5%84%E6%BA%90/%E6%95%B0%E5%AD%A6%E5%88%86%E6%9E%90II_%E6%9B%B4%E6%96%B0%E5%88%B02023%E5%B9%B42%E6%9C%8824%E6%97%A5%5B1%5D.pdf"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")的图就非常好理解了")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"!["),i("span",{style:{"--shiki-light":"#032F62","--shiki-light-text-decoration":"underline","--shiki-dark":"#DBEDFF","--shiki-dark-text-decoration":"underline"}},"enter description here"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]("),i("span",{style:{"--shiki-light":"#24292E","--shiki-light-text-decoration":"underline","--shiki-dark":"#E1E4E8","--shiki-dark-text-decoration":"underline"}},"https://xiaoshujiangaly1.oss-cn-beijing.aliyuncs.com/小书匠/神秘多元微分学/d3b0e3f1c8c68932e8e6bb24cf6d4a79.png"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},`&lt;div class="proof-block" style="--proof-font: 'SimSun';">`)]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    &lt;span class="proof-title">证明&lt;/span>')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    &lt;div>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        正文")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    &lt;span class="qed-sign">Q.E.D. ■&lt;/span>')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"["),i("span",{style:{"--shiki-light":"#032F62","--shiki-light-text-decoration":"underline","--shiki-dark":"#DBEDFF","--shiki-dark-text-decoration":"underline"}},"^1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]：这个就是非常基础的点集拓扑内容了，哪天指不定我就更新了呢")])])])])],-1)])])}const o=l(e,[["render",h]]);export{c as __pageData,o as default};
