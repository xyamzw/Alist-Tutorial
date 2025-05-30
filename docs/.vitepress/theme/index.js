import DefaultTheme from 'vitepress/theme';
import Linkcard from './components/Linkcard.vue';
import HomeUnderline from './components/HomeUnderline.vue';
import MyLayout from './components/MyLayout.vue';
import CopyLink from './components/CopyLink.vue';
import MouseClick from './components/MouseClick.vue';
import MouseFollower from './components/MouseFollower.vue';
import {watch, onMounted, nextTick} from 'vue';
import 'virtual:group-icons.css';
import './style/index.css';
let homePageStyle;
export default {
	extends: DefaultTheme,
	enhanceApp({app, router}) {
		app.component('Linkcard', Linkcard);
		app.component('HomeUnderline', HomeUnderline);
		app.component('MouseFollower', MouseFollower);
		app.component('MouseClick', MouseClick);
		app.component('CopyLink', CopyLink);
		// 彩虹背景动画样式
		if (typeof window !== 'undefined') {
			watch(
				() => router.route.data.relativePath,
				() => updateHomePageStyle(location.pathname === '/'),
				{
					immediate: true,
				},
			);
		}
	},
};
// 彩虹背景动画样式
const updateHomePageStyle = (value) => {
	if (value) {
		if (homePageStyle) return;

		homePageStyle = document.createElement('style');
		homePageStyle.innerHTML = `
      :root {
        animation: rainbow 12s linear infinite;
      }`;
		document.body.appendChild(homePageStyle);
	} else {
		if (!homePageStyle) return;

		homePageStyle.remove();
		homePageStyle = undefined;
	}
};
