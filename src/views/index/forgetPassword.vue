<template>
	<div id="forgetpw">
		<h2>找回密码</h2>
		<p>提示：请输入任意一次平台充值的交易号或订单号</p>
		<el-form status-icon :model="form" ref="form" :rules="RULES" label-width="100px">
			<el-form-item label="用户名 :" prop="username">
				<el-input v-model="form.username" placeholder="字母和数字组合且长度大于5位" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="订单号 :" prop="outTradeNo">
				<el-input v-model="form.outTradeNo" placeholder="保存的订单号"></el-input>
			</el-form-item>
			<el-form-item label="新密码:" prop="newPassword">
				<el-input type="password" @keyup.native.enter="changePassword" v-model="form.newPassword" placeholder="修改的新密码"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button :loading="btnloading" type="info" @click="changePassword">修改密码</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			var validName = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('用户名不能为空'))
				} else {
					if (value.length < 5) {
						return callback(new Error('用户名长度不能低于5位'))
					} else {
						var reg = /^[0-9a-zA-Z]+$/
						if (!reg.test(value)) {
							return callback(new Error('请检查用户名是否由字母数字组合'))
						}
					}
					callback()
				}
			};
			var validreQQ = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('密码不能为空'))
				} else {
					if (value.length < 6) {
						return callback(new Error('密码长度不能低于6位'))
					}
					callback()
				}
			};
			return {
				form: {
					username: null,
					outTradeNo: null,
					newPassword: null
				},
				RULES: {
					username: [{
						required: true,
						validator: validName,
						trigger: 'blur'
					}],
					outTradeNo: [{
						required: true,
						message: '请输入订单号',
						trigger: 'blur'
					}],
					newPassword: [{
						required: true,
						validator: validreQQ,
						trigger: 'blur'
					}],
				},
				btnloading: false
			}
		},
		methods: {
			changePassword() {
				this.$refs.form.validate(valid => {
					if (valid) {
						this.btnloading = true;
						this.$http.user.changePasswordByOutTradeNo(this.form).then(resp => {
							if (resp.code == 200) {
								this.$notify({
									type: 'success',
									message: '修改成功,请登录'
								})
							}
							this.btnloading = false;
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	#forgetpw {
		h2 {
			text-align: center;
			font-size: 1.8rem;
			margin-bottom: 1rem;
		}

		p {
			text-align: center;
			margin-bottom: 1.5rem;
		}

		.el-form {
			padding: 0 10rem;

			.el-form-item {
				margin-bottom: 2.2rem;

				/deep/.el-form-item__content {
					display: flex;
					justify-content: center;

					.el-input {
						width: 95%;
					}

					.el-button {
						width: 95%;
					}
				}
			}
		}
	}
</style>
