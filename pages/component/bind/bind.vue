<template>
	<view class="container">
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<view slot="backText">返回</view>
			<view slot="content">绑定学号</view>
		</cu-custom>
		<view class="bind-body">
			<div class="login-form-content">
				<div class="form-input-content">
					<div class="form-input">
						<input type="text" id="studentId" v-model="studentId" value="" placeholder="请输入您的学号">
					</div>
					<div class="form-input">
						<input type="password" id="password" v-model="password" value="" placeholder="请输入您的密码">
					</div>
				</div>
			</div>
			<div class="login-btn" @tap="bind">
				绑 定
			</div>
		</view>
	</view>
</template>

<script>
	import {
		mapActions
	} from 'vuex'
	import {
		showToast
	} from '@/util'
	export default {
		data() {
			return {
				studentId: "",
				password: ""
			}
		},
		onLoad() {
			uni.showShareMenu()
		},
		methods: {
			...mapActions('student', ['Bind']),
			bind() {
				if (this.studentId == "" || this.password == "") {
					uni.showModal({
						title: '提示',
						content: '学号或者密码不能为空',
						showCancel:false
					});
					return;
				}
				this.Bind({
					studentId:this.studentId,
					password:this.password
				})
			}
		}
	}
</script>

<style scoped>
	.container {
		background: #fff;
		padding: 0;
		margin: 0;
		height: 100vh;
	}

	.bind-body {
		padding-top: 200upx;
	}

	.logo {
		width: 100%;

	}

	.logo img {
		position: relative;
		top: 50%;
		left: 50%;
		margin-left: -4.5rem;
		margin-top: -1.5rem;
		width: 9rem;
		height: 3rem;
	}

	.login-form-content {
		width: 85%;
		background: #fff;
		border-radius: 8px;
		margin: 0 auto;
		position: relative;
		top: -1.5rem;
		box-shadow: 0px 0px 20px rgba(73, 198, 40, 0.1);
	}

	.form-title {
		color: #3e4a59;
		font-size: 30px;
		margin-left: 1rem;
		margin-top: 1rem;
	}

	.form-input-content {
		width: 100%;
		padding: 0 1rem 1rem 1rem;
	}

	.form-input {
		width: 100%;
		height: 60px;
		border-bottom: 1px solid rgb(195, 240, 183);
		position: relative;
	}

	.form-input input {
		height: 50px;
		position: absolute;
		top: 5px;
		left: 0;
		width: 80%;
	}

	.forgot {
		float: right;
		padding-right: 1rem;
		padding-bottom: 2rem;
		font-size: 0.8rem;
	}

	.forgot span {
		background: linear-gradient(to right, #039fbd, #00cdc6);
		-webkit-background-clip: text;
		color: transparent;
	}

	.reg {
		float: left;
		padding-left: 1rem;
		padding-bottom: 2rem;
		font-size: 0.8rem;
	}

	.reg span {
		background: linear-gradient(to right, #039fbd, #00cdc6);
		-webkit-background-clip: text;
		color: transparent;
	}

	.login-btn {
		width: 60%;
		margin: 0 auto;
		height: 2.8rem;
		border-radius: 3rem;
		background: linear-gradient(to right, #70F570, #49C628);
		position: relative;
		top: 30upx;
		z-index: 99;
		color: #fff;
		font-size: 1rem;
		text-align: center;
		line-height: 2.8rem;
	}

	.login-other {
		margin-top: 2rem;
	}

	.login-other-title {
		height: 2rem;
		width: 6rem;
		line-height: 2rem;
		text-align: center;
		color: #bebec1;
		background: #f4f5fa;
		position: relative;
		left: 50%;
		margin-left: -3rem;
		top: -1rem;
		z-index: 99;
	}

	.login-icon {
		width: 50px;
		height: 50px;
		position: relative;
		top: 5px;
	}

	.phone-icon {
		width: 50px;
		height: 50px;

		background-size: 33%;
		background-position: center;
	}

	.pass-icon {
		width: 50px;
		height: 50px;

		background-size: 35%;
		background-position: center;
	}

	.code-icon {
		width: 50px;
		height: 50px;

		background-size: 40%;
		background-position: center;
	}

	.login-btn:active {
		transform: scale(1.1);
		-webkit-transform: scale(1.1);
		-moz-transform: scale(1.1);
		-o-transform: scale(1.1);
		-ms-transform: scale(1.1);
	}

	.login-other-icon {
		background: #f4f5fa;
		width: 80%;
		margin: 0 auto;
	}

	.login-other-icon img {
		margin: 0 auto;
		width: 3rem;
	}

	.login-other-icon img:active {
		transform: scale(1.1);
		-webkit-transform: scale(1.1);
		-moz-transform: scale(1.1);
		-o-transform: scale(1.1);
		-ms-transform: scale(1.1);
	}

	.back-login {
		color: #aab6f2;
		font-size: 0.9rem;
		text-align: center;
	}

	.send-code {
		height: 40px;
		position: absolute;
		top: 10px;
		right: 0;
		width: 100px;
		background: linear-gradient(to right, #02a8bf, #01c0c3);
		border-radius: 50px;
		text-align: center;
		line-height: 40px;
		color: #fff;
		font-size: 16px;
	}
</style>
