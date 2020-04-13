import Vuex from "vuex";
import Vue from "vue";
import user from "./modules/user.js"
import website from "./modules/website.js"

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		user,
		website
	},
});
