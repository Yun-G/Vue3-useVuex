import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './config'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 全局路由守卫
//可在这里判断权限和状态  放行必须调用next方法
router.beforeEach((to,from,next) => {
	// console.log(to);
	// console.log(from);
	// if () {
		
	// }
	next();
})

export default router
