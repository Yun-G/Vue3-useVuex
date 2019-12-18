const state = {
	userInfo: {
		isLogin: false,
	},
	token: null,
};
// getters 从 store 中的 state 中派生出一些状态
const getters = {};
// actions
const actions = {
	setUserDate({ commit }, obj) {
		commit('setUserDate', obj);
	},
	setToken({ commit }, token){
		commit('setToken', token);
	}
};
// mutations store.commit改变state,唯一改变state的地方
const mutations = {
	setUserDate(state, obj) {
		state.userInfo = obj;
	},
	setToken(state,token){
		state.token =token;
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
