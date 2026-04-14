---
title: "使用的css一览"
date: 2026-04-14
tags: []
source: CouchDB
draft: true
---

<div v-pre>

# 笔记源码预览

```markdown
---
slug: storywriter/grammar
titile:  使用的CSS一览
---
[toc]

/**xsjCSSMeta
previewTheme: default
xsjCSSMeta**/

# 每个都有的：


#  数学块通用容器 
 
/* ====================== 数学块 ====================== */
.math-container {
    margin: 1.5em 0;
    border-radius: 6px;
    overflow: hidden;
    /* 默认字体，可根据需要调整 */
    font-family: 'Kaiti', 'SmileySans', 'SimSun', sans-serif;
}

/* 命题/定义 头部 */
.math-header {
    background-color: var(--head-bg, #4caf50); /* 默认为绿色 */
    color: white;
    padding: 8px 16px;
    font-weight: bold;
    font-family: var(--head-font, 'SmileySans'); /* 头部默认得意黑 */
    display: flex;
    justify-content: space-between;
}

/* 命题/定义 内容区 */
.math-content {
    background-color: rgba(0, 0, 0, 0.02);
    border: 1px solid var(--head-bg, #4caf50);
    border-top: none;
    padding: 15px;
    font-family: var(--content-font, 'Kaiti'); /* 内容默认文楷 */
    line-height: 1.7;
}

/* 证明块 (虚线框样式) */
.proof-block {
    margin: 1.5em 0;
    padding: 15px;
    border: 2px dashed #ed8d39; /* 默认橙色虚线 */
    border-radius: 8px;
    position: relative;
    font-family: var(--proof-font, 'SimSun');
}

.proof-title {
    color: #ed8d39;
    font-weight: bold;
    font-size: 28px;
    margin-bottom: 8px;
    display: block;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.qed-sign {
    float: right;
    font-weight: bold;
    color: #ed8d39;
    margin-top: 10px;
}
.proof-block::after {
    content: "";
    display: table;
    clear: both;
}



# 特制的：

h1 {
    font-family: "SmileySans", "得意黑", Arial, sans-serif;
    font-size: 2.8em;
    font-weight: 700;
    text-align: center;
    
    /* 初始颜色 */
    color: #ffd700;
    
    /* 动画：控制颜色变浅 + 光晕变糊 */
    animation: goldBreath 4.2s ease-in-out infinite alternate;
    
    border-bottom: 3px solid #ffcc00;
    padding-bottom: 16px;
    margin: 40px 0 35px 0;
}

@keyframes goldBreath {
    from {
        /* 颜色较深，光晕较紧凑 */
        color: #ffb300; 
        text-shadow: 
            0 0 5px #ffd700,
            0 0 10px rgba(255, 170, 0, 0.5);
    }
    to {
        /* 颜色变浅（接近白色），光晕变大变糊 */
        color: #fff9c4; 
        text-shadow: 
            0 0 12px #ffffff,
            0 0 25px #ffcc00,
            0 0 45px rgba(255, 200, 0, 0.8);
    }
}



==奢靡 #000000==
==是 #000000==
```

</div>
