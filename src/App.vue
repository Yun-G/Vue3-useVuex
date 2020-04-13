<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'app',
		created() {
			let token = this.$xStorage.getItem("token")
			if (token) {
				this.$store.commit('user/setToken', token);
			}
		}
	}
</script>

<style>

</style>
