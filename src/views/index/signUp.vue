<template>
	<div id="register">
		<div class="btn-group">
			<el-button  @click="$router.replace('/login')" >登录</el-button>
			<el-button type="primary">注册</el-button>
		</div>
		<el-form status-icon :model="form" ref="form" :rules="RULES" label-width="100px">
			<el-form-item label="用户名 :" prop="username">
				<el-input v-model="form.username" placeholder="字母或数字且长度大于5位" maxlength="16" show-word-limit autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="密码 :" prop="password">
				<el-input type="password" v-model="form.password" placeholder="密码长度6位以上"></el-input>
			</el-form-item>
			<el-form-item label="确认密码 :" prop="repassword">
				<el-input type="password" v-model="form.repassword" placeholder="确认密码"></el-input>
			</el-form-item>
			<el-form-item label="QQ :" prop="qq">
				<el-input v-model="form.qq" placeholder="QQ" @keyup.native.enter="toReg"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button :loading="btnloading" type="info" @click="toReg">注册</el-button>
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
						var reg = /^[a-zA-Z0-9]+$/;
						if (!reg.test(value)) {
							return callback(new Error('用户名不能包含特殊字符或中文'))
						}
					}
					callback()
				}
			};
			var validPassword = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('密码不能为空'))
				} else {
					if (value.length < 6) {
						return callback(new Error('密码长度不能低于6位'))
					}
					callback()
				}
			};
			var validrePass = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('请确认密码'))
				} else {
					if (this.form.password != value) {
						return callback(new Error('两次密码输入不一致'))
					}
					callback()
				}
			};
			var validreQQ = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('QQ不能为空'))
				} else {
					var reg = /^[1-9][0-9]{4,9}$/gim;
					if (!reg.test(value)) {
						return callback(new Error('QQ格式不正确'))
					}
					callback()
				}
			};
			return {
				form: {
					username: null,
					password: null,
					repassword: null,
					qq: null
				},
				RULES: {
					username: [{
						required: true,
						validator: validName,
						trigger: 'blur'
					}],
					password: [{
						required: true,
						validator: validPassword,
						trigger: 'blur'
					}],
					repassword: [{
						required: true,
						validator: validrePass,
						trigger: 'blur'
					}],
					qq: [{
						required: true,
						validator: validreQQ,
						trigger: 'blur'
					}],
				},
				btnloading:false
			}
		},
		methods: {
			toReg() {
			this.$refs.form.validate(valid => {
				if(valid){
					this.btnloading = true;
					this.$http.user.register(this.form).then(resp => {
						if(resp.code == 200){
							let tips = this.$notify({
								message:'注册成功，即将跳转登录页',
								type:'success'
							})
							setTimeout(()=>{
								this.$router.replace('/login')
								tips.close()
							},1500)
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
	#register {
		padding: 0 10rem;

		.el-form {
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
						// padding: 1rem 7rem;
					}
				}
			}
		}
	}
</style>
