<template>
	<div id="app"><router-view /></div>
</template>

<script>
export default {
	name: 'app',
	created() {
		let token = this.$xStorage.getItem('token');
		if (token) {
			this.$store.commit('user/setToken', token);
		}
	},
	mounted() {
		setTimeout(function() {
			let loader = document.getElementById('loader-wrapper');
			document.body.removeChild(loader);
		}, 500);
	}
};
</script>

<style></style>
