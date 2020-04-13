//在这里配置路由页面
const routes = [{
		path: '/',
		component: resolve => require(['../views/index/index'], resolve),
		redirect: 'login',
		children: [{
				path: 'login',
				name: 'login',
				component: resolve => require(['../views/index/signIn'], resolve),
			},
			{
				path: 'register',
				name: 'register',
				component: resolve => require(['../views/index/signUp'], resolve),
			},
			{
				path: 'forgetpw',
				name: 'forgetpw',
				component: resolve => require(['../views/index/forgetPassword'], resolve),
			}

		]
	},
	{
		path: "/404",
		name: "notFound",
		component: resolve => require(['../views/error/404'], resolve),
	},
	{
		path: "*", // 此处需特别注意置于最底部
		redirect: "/404"
	}
]
export default routes
