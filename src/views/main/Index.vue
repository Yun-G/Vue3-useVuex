<template>
	<div id="index">
		<a @click.prevent="tologin">首页</a>
		<router-link to="/login">登陆</router-link>
	</div>
</template>

<script>
export default {
	methods: {
		tologin() {
			this.$http.user.login({
				username: 1,
				password: 1
			});
		}
	}
};
</script>

<style></style>
