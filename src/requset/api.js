import base from './baseUrl'; // 导入接口域名列表
import axios from './index' // 导入http中创建的axios实例
//用户模块
const user = {
	//登陆
	login(data){
		return axios.post(`${base.sq}/user/login`, data)
	},
}

export default {
	user
}
