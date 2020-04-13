import base from './baseUrl'; // 导入接口域名列表
import axios from './index' // 导入http中创建的axios实例
//用户模块
const user = {
	//注册
	register(data) {
		return axios.post(`${base.sq}/member/register`, data)
	},
	//登录
	login(data) {
		return axios.post(`${base.sq}/member/login`, data)
	},
}


export default {
	user,
}
