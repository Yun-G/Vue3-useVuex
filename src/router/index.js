import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './config'
import store from "../store/index"

Vue.use(VueRouter)

//解决在路由中添加了相同的路由
var originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err);
};
VueRouter.prototype.replace = function replace(location) {
	return originalPush.call(this, location).catch(err => err);
};


const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})
// 全局路由守卫
//可在这里判断权限和状态  放行必须调用next方法
router.beforeEach((to, from, next) => {
	store.commit('website/cancelAll');
	const exclude = ['/login', '/register', '/forgetpw']
	//访问除登录页面所有页面验证token存在否
	let token = Vue.prototype.$xStorage.getItem("token");
	if (exclude.includes(to.path)) {
		if (token != 403 && token != null && from.path == '/') {
			router.replace({
				path: '/index',
			});
		} else {
			next();
		}
	} else {
		if (token != 403 && token != null) {
			next();
		} else {
			router.replace({
				path: '/login',
				query: {
					redirect: to.path,
					code: token
				}
			});
		}
	}
})

export default router
