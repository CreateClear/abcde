<template>
	<div id='sign'>
		<HeadCom :val='val'></HeadCom>
		<div class="signBox">
			<div class="signIpt">
				<div class="verification">
					<input type="text" placeholder="请输入验证码" @change='verificationCode'>
					<div class="verificationCode">{{verificationCode}}</div>
				</div>
				<div class="phoneVerification">
					<input type="text" placeholder="请输入你的手机号" class="phone">
					<button class="getPhoneVerification">{{btnVal}}</button>
				</div>
				<input type="text" placeholder="请输入手机验证码" class="inputVerificationCode">
				<input type="password" placeholder="密码:6-16位字母，数字，特殊字符" class="password inputVerificationCode">
			</div>
			<p class="terms"><span>注册账号即表示同意遵守</span><a href="http://m.vancl.com//channel/index/441">《VANCL凡客服务条款》</a></p>
			<button class="signIn">点击注册</button>
		</div>
	</div>
</template>
<style>
	#sign {
		height: 100vh;
		background: #fff;
	}
	.signBox {
		padding: 0 4vh
	}
	.signIpt {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		height: 30vh;
		margin: 5vh 0;
	}
	#sign input {
		height: 5vh;
		background: #f5f5f5;
		border: none;
		padding: 0 3vw;
		outline: none
	}
	.verification {
		display: flex;
		justify-content: space-between;
	}
	.verification .verificationCode {
		width: 20vw;
		height: 5vh;
		border: 1px solid #eee;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.phoneVerification {
		display: flex;
		justify-content: space-between;
	}
	.phoneVerification .getPhoneVerification {
		border: 2px solid #ccc;
		background: #fff;
		color: #f00;
		width: 25vw;
		border-radius: 3px
	}
	.terms {
		font-size: 12px;
	}
	.terms span {
		color: #aaa
	}
	.signIn {
		width: 100%;
		height: 6vh;
		margin-top: 2vh;
		background: #b81b22;
		border: none;
		color: #fff;
		font-size: 16px;
		border-radius: 2px
	}
</style>
<script>
	const HeadCom = r => require.ensure([], () => r(require('@/components/head.vue')), 'HeadCom');
	export default {
		data:function(){
			return {
				val:'注册',
				btnVal:'获取验证码',
				verificationCode:''
			}
		},
		components: {
			HeadCom
		},
		methods: {
			verificationCode(){
				var _this=this
				for(var i=0; i<4; i++) {
					_this.verificationCode+=Math.floor(Math.random()*10)
				}
				return _this.verificationCode
			}
		},
		created(){
			var _this=this
				for(var i=0; i<4; i++) {
					_this.verificationCode+=Math.floor(Math.random()*10)
				}
				return _this.verificationCode
		}
	}
</script>