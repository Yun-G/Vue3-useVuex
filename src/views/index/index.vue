<template>
	<div id="log-index">
		<div class="comm-left">
			<div>欢迎使用</div>
		</div>
		<div class="comm-right">
			<router-view />
		</div>
	</div>
</template>

<script>
	export default {
	}
</script>

<style lang="scss">
	#log-index {
		display: flex;
		height: 100%;
		padding: 0.1rem;
		box-sizing: border-box;

		.comm-left {
			flex: 4;
			background: linear-gradient(180deg, #50bbfe, #4b9efe);
			display: flex;
			align-items: center;
			div{
				margin: 0 auto;
				font-size: 3.5rem;
				color: #FFFFFF;
			}
		}

		.comm-right {
			flex: 6;
			padding: 1rem 3rem 0 3rem;
			.btn-group{
				padding: 1rem 0;
				border-bottom: 1px solid #eee;
				.el-button{
					border-radius: 0;
					padding: 1rem 2.5rem;
				}
				margin-bottom: 2rem;
			}
		}
	}
</style>
