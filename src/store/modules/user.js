const state = {
	userInfo: {},
	token: null,
};
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
	actions,
	mutations
};
