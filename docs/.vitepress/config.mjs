import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar' // 取消注释

export default defineConfig({
  ignoreDeadLinks: true,
  markdown: {
    // 渲染为原始文本，减少对尖括号的敏感度
    renderAsRaw: true
  },
  title: "MUTSUMI!",
  description: "a website for mathematics physics computerscience & animation! (yes)",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Stable Notes', link: '/stable-notes/' },
      { text: 'Drafts', link: '/draft-notes/' }
    ],

    // 使用 generateSidebar 自动扫描文件夹
    sidebar: generateSidebar([
      {
        documentRootPath: 'docs',
        scanStartPath: 'draft-notes',
        resolvePath: '/draft-notes/',
        text: '📝 草稿笔记',
        collapsed: false,
        useTitleFromFrontmatter: true // 使用笔记开头的 title
      },
      {
        documentRootPath: 'docs',
        scanStartPath: 'stable-notes',
        resolvePath: '/stable-notes/',
        text: '📚 稳定笔记',
        collapsed: false,
        useTitleFromFrontmatter: true
      }
    ]),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/iron-water/Great-notes' }
    ]
  }
})