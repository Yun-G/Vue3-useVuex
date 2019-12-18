//在这里配置路由页面
import Home from '../views/main/Index'

const routes = [{
	path: '/',
	name: 'home',
	component: Home,
}, {
	path: "/login",
	name: "logn",
	component: () => import('../views/login/Login')
}]
export default routes
