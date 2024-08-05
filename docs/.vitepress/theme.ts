import { DefaultTheme } from "vitepress"
import { coreSidebar, oneBotSidebar } from "./catalogue"
import { coreNav, oneBotNav } from "./nav"

export const theme: DefaultTheme.Config = {
	search: {
		provider: 'local'
	},
	nav: [
		{ text: "首页", link: "/" },
		coreNav,
		oneBotNav,
		{
			text: "GitHub",
			items: [
				{
					text: "Lagrange.Core",
					link: "https://github.com/LagrangeDev/Lagrange.Core",
				},

				{
					text: "lagrangejs",
					link: "https://github.com/LagrangeDev/lagrangejs",
				},
				{
					text: "lagrange-python",
					link: "https://github.com/LagrangeDev/lagrange-python",
				},
				{
					text: "Lagrange.Doc",
					link: "https://github.com/LagrangeDev/Lagrange.Doc",
				},
			],
		},
	] as DefaultTheme.NavItem[],
	sidebar: {
		"/Lagrange.Core/": coreSidebar,
		"/Lagrange.OneBot/": oneBotSidebar,
	} as DefaultTheme.SidebarMulti,
	socialLinks: [
		{ icon: "github", link: "https://github.com/LagrangeDev/Lagrange.Doc" },
	],
	editLink: {
		pattern:
			"https://github.com/LagrangeDev/Lagrange.Doc/edit/main/docs/:path",
		text: "在 GitHub 上帮助我们完善这个页面",
	},
	docFooter: {
		prev: "上一页",
		next: "下一页",
	},
	lastUpdated: {
		text: "最后更新",
	},
	outlineTitle: "目录",
	sidebarMenuLabel: "菜单",
	returnToTopLabel: "返回顶部",
	externalLinkIcon: true,
	darkModeSwitchLabel: "外观",
	lightModeSwitchTitle: "切换到浅色模式",
	darkModeSwitchTitle: "切换到深色模式",
}
