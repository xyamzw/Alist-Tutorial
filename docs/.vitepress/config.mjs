import { defineConfig } from 'vitepress'
import { nav,sidebar} from './configs'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
export default defineConfig({
  base: '/',
  title: "vitepress-alist",
  description: "一个alist教程",
  markdown: {
    lineNumbers: true,
    config(md) { 
      md.use(groupIconMdPlugin)
    },
  },

  vite: { 
    plugins: [
      groupIconVitePlugin() 
    ],
  },
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/xyamzw/Alist-Tutorial/edit/main/docs/:path',
      text: '在GitHub编辑本页'
    },
    // 导航栏
    nav,
    // 侧边栏
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xyamzw/Alist-Tutorial' }
    ]
  }
})
