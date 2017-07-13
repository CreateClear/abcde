<template>
	<div id="log">
		<HeadCom :val='val'></HeadCom>
		<div class="logBox">
			<div class="change">
				<button @click='msg=1'>普通登录</button>
				<button @click='msg=0'>快速登录</button>
			</div>
			<div v-if='msg==1' class="normalLog">
				<div class="normalLogIpt">
					<input type="text" placeholder="点击输入手机号/Email">
					<input type="text" placeholder="请输入密码">
					<button class="logInBtn">登 录</button>
				</div>
				<div class="goSign">
					<span><router-link to='/sign'>免费注册 &gt;</router-link></span>
					<span><a href="http://m.vancl.com/User/RetrieveStep1">手机账号找回密码 &gt;</a></span>
				</div>
				<p class="otherLog">使用其他账户登录</p>
				<ul class='otherLogLink'>
					<li><img src="../../static/imgs/zhifubao.svg" alt=""></li>
					<li><img src="../../static/imgs/新浪.svg" alt=""></li>
					<li><img src="../../static/imgs/小米.svg" alt=""></li>
					<li><img src="../../static/imgs/QQ.svg" alt=""></li>
				</ul>
			</div>
			<div class="fastLog" v-else>
				34165132156543213
			</div>
		</div>
	</div>
</template>
<style>
	.logBox {
		padding: 0 4vw;
	}
	.change {
		display: flex;
		justify-content: space-between;
	}
	.change button {
		border: none;
		background: #fff;
		height: 6vh;
		width: 49%;
		color: #666;
		font-size: 16px;
		outline: none
	}
	.normalLogIpt {
		height: 30vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-top: 8vh;
	}
	.normalLogIpt input {
		height: 5vh;
		background: #f5f5f5;
		border: none;
		padding: 0 3vw;
		outline: none
	}
	.normalLogIpt button {
		background: #b81b22;
		border: none;
		height: 6vh;
		border-radius: 2px;
		overflow: hidden;
		color: #fff;
		font-size: 16px;
		margin-top: 3vh;
		outline: none
	}
	.goSign {
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		margin-top: 2vh;
	}
	.goSign span a {
		color: #666
	}
	.otherLog {
		margin-top: 4vh;
		font-size: 12px;
		text-align: left;
	}
	.otherLogLink {
		display: flex;
		width: 45vw;
		justify-content: space-between;
		margin-top: 1vh;
	}
	.otherLogLink img {
		width: 8vw;
	}
</style>
<script>
	const HeadCom = r => require.ensure([], () => r(require('@/components/head.vue')), 'HeadCom');

	export default {
		data:function(){
			return {
				val:'登录',
				msg:1
			}
		},
		components: {
			HeadCom
		}
	}
</script>