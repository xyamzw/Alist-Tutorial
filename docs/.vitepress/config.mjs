import {defineConfig} from 'vitepress';
import {nav, sidebar} from './configs';
import {
	groupIconMdPlugin,
	groupIconVitePlugin,
} from 'vitepress-plugin-group-icons';
export default defineConfig({
	base: '/',
	title: 'vitepress-alist',
	description: '一个alist教程',
	markdown: {
		lineNumbers: true,
		toc: {level: [1, 2, 3]},
		config(md) {
			md.use(groupIconMdPlugin);
		},
	},

	vite: {
		plugins: [groupIconVitePlugin()],
	},
	themeConfig: {
		editLink: {
			pattern:
				'https://github.com/xyamzw/Alist-Tutorial/edit/main/docs/:path',
			text: '在GitHub编辑本页',
		},
		// 导航栏
		nav,
		// 侧边栏
		sidebar,
		// 大纲
		outline: {
			level: [2, 3],
			label: '页面导航',
		},
		sidebarMenuLabel: '目录',
		docFooter: {
			prev: '上一页',
			next: '下一页',
		},
		socialLinks: [
			{icon: 'github', link: 'https://github.com/xyamzw/Alist-Tutorial'},
		],
	},
});
