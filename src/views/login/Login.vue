<template>
	<div id="login">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="用户名" prop="username"><el-input v-model="ruleForm.username"></el-input></el-form-item>
			<el-form-item label="密码" prop="password"><el-input v-model="ruleForm.password"></el-input></el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
import  { mapActions }  from "vuex"
export default {
	data() {
		return {
			ruleForm: {
				username: '',
				password: ''
			},
			rules: {
				username: [{ required: true, message: '请输入用户名', trigger: 'blur' }, { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }],
				password: [{ required: true, message: '请输入用密码', trigger: 'blur' }, { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }]
			}
		};
	},
	methods: {
		...mapActions("user",['setToken']),
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid){
					this.$http.user.login(this.ruleForm).then(resp => {
						if (resp.code == 1) {
							this.$xStorage.setItem("token",resp.data.token)
							this.setToken(resp.data.token)
							this.$router.push({
								path:this.$route.query.redirect
							})
						}
					})
					
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		}
	}
};
</script>
<style></style>
