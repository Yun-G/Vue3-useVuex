//在这里配置路由页面
const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/index/index'),
	},
	{
		path: '/',
		name: '',
		component: () => import('../views/index/signIn'),
	},
	{
		path: "/404",
		name: "notFound",
		component: () => import('../views/error/404'),
	},
	{
		path: "*", // 此处需特别注意置于最底部
		redirect: "/404"
	}
]
export default routes
