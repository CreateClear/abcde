<template>
	<div id="cont">
		<div class="search">
			<div class="searchBox">
				<span class="searchButton">go</span>
				<input type="text" placeholder="熊本熊" class="searchInput">
			</div>
			<div class="msg">
				···
				<span class="isMsg"></span>
			</div>
		</div>
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide"><img src="http://i1.m.vancl.com/wap/2017_6_29_14_32_36_1405_640x402.jpg" alt=""></div>
		        <div class="swiper-slide"><img src="http://i7.m.vancl.com/wap/2017_6_29_16_40_34_7377_640x402.jpg" alt=""></div>
		        <div class="swiper-slide"><img src="http://i9.m.vancl.com/wap/2017_6_29_16_14_34_9219_640x402.jpg" alt=""></div>
		        <div class="swiper-slide"><img src="http://i7.m.vancl.com/wap/2017_6_30_17_19_20_7575_640x402.jpg" alt=""></div>
		        <div class="swiper-slide"><img src="http://i9.m.vancl.com/wap/2017_6_29_14_32_50_9694_640x402.jpg" alt=""></div>
		        <div class="swiper-slide"><img src="http://i2.m.vancl.com/wap/2017_6_29_16_14_56_2651_640x402.jpg" alt=""></div>
		        <div class="swiper-slide"><img src="http://i7.m.vancl.com/wap/2017_6_29_14_32_59_7067_640x402.jpg" alt=""></div>
		        <div class="swiper-slide"><img src="http://i4.m.vancl.com/wap/2017_6_27_17_20_14_4460_640x402.jpg" alt=""></div>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>		    

		</div>
		<a  class="fakerTip" href="http://m.vancl.com/channel/index/883">vacal客服中心谨防诈骗重要提示</a>
		<a class="ad" href="http://m.vancl.com/CashReCharge/index"><img src="../../static/imgs/ad.jpg" alt=""></a>
		<ListCom :lists='lists'></ListCom>
		<router-link to='/buy' class='proHead'><img src="http://i4.m.vancl.com/wap/2017_6_29_10_46_23_4629_640x350.jpg" alt=""></router-link>
		<ListCom :lists='lists'></ListCom>
		<div class="more">
			<a href="http://m.vancl.com/channel/index/838" onclick="{$event$}">
				<img src="http://i5.m.vancl.com/wap/2017_6_27_14_51_59_5762_640x310.jpg">
			</a>
		</div>
		<div class="go">
			<router-link to='/class' class="goMore">
				<img src="http://i10.m.vancl.com/content/html5v3/images/see-all.jpg" alt="">
			</router-link>
			<div class="goTop" @click='handleClick'>
				<img src="http://i10.m.vancl.com/content/html5v3/images/ret-top.jpg" alt="">
			</div>
		</div>
		<div class="log">
			<router-link to='/log' class="login">登录</router-link>
			<router-link to='/sign' class="sign">注册</router-link>
			<div class="user">{{username}}|<div class="logout">退出</div></div>
		</div>
		<ul class="link">
			<li><a href="http://m.vancl.com/help/default/131"><img src="http://i10.m.vancl.com/Content/H5/img/help1.png" alt=""></a></li>
			<li><a href="http://m.vancl.com/app/d"><img src="http://i10.m.vancl.com/Content/H5/img/download1.png" alt=""></a></li>
			<li><a href="http://m.vancl.com/help/default/156"><img src="http://i10.m.vancl.com/Content/H5/img/weixin1.png" alt=""></a></li>
			<li><a href="http://www.vancl.com/?gotowap=0"><img src="http://i10.m.vancl.com/Content/H5/img/pcsite1.png" alt=""></a></li>
		</ul>
		<p class="beian">京ICP证100557号</p>
		<FootCom></FootCom>
	</div>
</template>

<style>
	body {
		background: #f2f2f2;
	}
	.search {
		width: 100vw;
		height: 7vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #b81c22;
		position: fixed;
		z-index: 99999
	}
	.searchBox {
		width: 80vw;
		height: 60%;
		background: #fff;
		border-radius: 5px;
		display: flex;
		padding: 0 10px;
		justify-content: space-between;
		align-items: center;
	}
	.searchInput {
		border: none;
		flex: 1;
		padding: 0 10px;
		outline: none
	}
	.msg {
		width: 5vw;
		height: 30%;
		color: #fff;
		border: 1px #fff solid;
		border-radius: 5px;
		margin-left: 3vw;
		position: relative;
	}
	.isMsg {
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: #fff;
		position: absolute;
		top: -4px;
		right: -4px;
	}
	#cont .swiper-slide {
		width: 100vw;
		height: auto;
		margin-top: 7vh;
	}
	#cont .swiper-slide img {
		width: 100%;
	}
	.fakerTip {
		width: 100vw;
		height: 7vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #fff;
		margin-top: 1vh; 
	}
	.ad {
		display: flex;
		width: 100vw;
		height: 5vh;
	}
	.ad img {
		width: 100%;
		height: 5vh;		
	}
	.proHead img {
		width: 100vw;
	}
	.more {
		width: 100vw;
	}
	.more img {
		width: 100%;
	}
	.go {
		display: flex;
		justify-content: space-around;
		margin-bottom: 6vh;
	}
	.go .goMore img {
		width: 49vw;
	}
	.go .goTop img {
		width: 49vw;
	}
	.log {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 10vh;		
	}
	.login,.sign {
		width: 20vw;
		font-size: 14px;
		background: #fff;
		height: 4vh;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 5px;
	}
	.user {
		display: none
	}
	.link {
		margin: 1vh   auto;
		width: 60vw;
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #ccc;
		border-top: 1px solid #ccc;
		padding: 2vh 0;
	}
	.link img {
		width: 10vw;
	}
	.beian {
		margin-bottom: 8vh;
		font-size: 14px;
	}
</style>
<script>
	const FootCom = r => require.ensure([], () => r(require('@/components/footer.vue')), 'FootCom');
	const ListCom = r => require.ensure([], () => r(require('@/components/list.vue')), 'FootCom');

	export default {
		data:function(){
			return{
				username:'Clear',
				lists:[]
			}			
		},
		mounted:function(){
			var mySwiper = new Swiper ('.swiper-container', {
			    loop: true,			    
			    paginationClickable: true,
			    autoplay: 2000,
			    autoplayDisableOnInteraction : false,
			    pagination: '.swiper-pagination',
			})        
		},
		methods:{
			handleClick(){
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0
			}
		},
		components: {
			FootCom,
			ListCom
		},
		created(){
			var _this=this;
			fetch('/productlists',{
				method:'get'
			}).then(function(response){
				return response.text()
			}).then(function(data){
				_this.lists=JSON.parse(data).hot
			})
		}
	}
	
</script>