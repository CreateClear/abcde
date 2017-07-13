<template>
	<div id='buy'>
		<HeadCom :val='val'></HeadCom>
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide"><img :src="lists.url1" alt=""></div>
		        <div class="swiper-slide"><img :src="lists.url2" alt=""></div>
		    </div>
		    <div class="swiper-pagination"></div>
		</div>
		<div class="buyBox">
			<p class="buyName">{{lists.name}} <span class="buyPrice">{{lists.price}}元</span></p>
			<a href="http://m.vancl.com//CashReCharge/index" class="buyAd">充100返100，点击充值</a>
			<div class="chooseBox">
				<button class="chooseSizeBtn">
					<span class="chooseCheck"></span>
					<span>选择 颜色/尺码</span>
					<div class="goChoose"></div>
				</button>
				<div class="chooseDetail">
					选择颜色:
					<div class="chooseColor">
						<button :class="{chooseCurr:chooseColor=='白色'}" @click='chooseColor="白色"'>白色</button>
						<button :class="{chooseCurr:chooseColor=='黑色'}" @click='chooseColor="黑色"'>黑色</button>
					</div>
					选择尺寸:
					<div class="chooseSize">
						<button :class="{chooseCurr:chooseSize=='S'}" @click='chooseSize="S"'>S</button>
						<button :class="{chooseCurr:chooseSize=='M'}" @click='chooseSize="M"'>M</button>
					</div>
					购买数量:
					<div class="chooseAmount">
						<button class="chooseLess" @click='lessAmount'><img src="http://m.vancl.com//Content/H5/img/minus.jpg" alt=""></button>
						<input type="text" disabled="disabled" v-model='buyAmount'>
						<button class="choosePlus" @click='buyAmount+=1'><img src="http://m.vancl.com//Content/H5/img/plus.jpg" alt=""></button>
					</div>
				</div>
			</div>
		</div>
		<div class="buyFoot">
			<router-link to='/cart' class='toCart'><img src="../../static/imgs/购物车.svg" alt=""><span class="buyNum">{{buyNum}}</span></router-link>
			<button class="add" @click='addToCart'>加入购物车</button>
		</div>
	</div>
</template>
<style>
	#buy button {
		background: #fff;
		outline: none;
	}
	.swiper-container {
		width: 100vw;
		background: #fff
	}
	.swiper-container img {
		width: 70vw
	}
	.buyBox {
		padding: 0 4vw;
		text-align: left;
		margin-bottom: 6vh;
	}
	.buyName {
		font-size: 14px;
	}
	.buyPrice {
		font-size: 16px;
		color: #b81c22;
		margin-left: 4vw
	}
	.buyAd {
		display: block;
		color: #b81c22;
		margin: 2vh 0;
	}
	.chooseBox {
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		font-size: 14px;
	}
	.chooseSizeBtn {
		background: #f5f5f5 !important;
		width: 100%;
		height: 6vh;
		text-align: left;
		margin: 2vh 0;
		border: none;
	}
	.chooseColor,.chooseSize,.chooseAmount {
		padding: 2vh;
		border-bottom: 1px solid #ccc;
		margin-bottom: 2vh;
		overflow: hidden;
	}
	.chooseColor button {
		width: 10vw;
		height: 4vh;
		border: 1px solid #ccc;
		margin-left: 2vw;
	}
	.chooseSize button {
		width: 8vw;
		height: 3vh;
		border: 1px solid #ccc;
		margin-left: 2vw;
	}
	.chooseAmount input {
		width: 7vw;
		height: 7vw;
		float: left;
		margin-left: 2vw;
		text-align: center;
	}
	.chooseAmount button {
		width: 8vw;
		border: none;
		box-sizing: border-box;
		float: left;
		margin-left: 2vw;
	}
	.chooseAmount img {
		width: 8vw;
	}
	.chooseCurr {
		border: 1px solid #b81c22 !important
	}
	.buyFoot {
		display: flex;
		border-top: 1px solid #999;
		position: fixed;
		bottom: 0;
		height: 6vh;
		width: 100vw
	}
	.toCart {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		background: #fff
	}
	.toCart img {
		width: 5vh;
		height: 5vh
	}
	.toCart span {
		display: block;
		position: absolute;
		top: 0.5vw;
		left: 27vw;
		width: 2vh;
		height: 2vh;
		background: #b81c22;
		color: #fff;
		border-radius: 50%;
		font-size: 12px
	}
	.add {
		flex: 1;
		border: none;
		background: #b81c22 !important;
		color: #fff
	}
</style>
<script>
	const HeadCom = r => require.ensure([], () => r(require('@/components/head.vue')), 'HeadCom');

	export default {
		data(){
			return {
				val:'商品详情',
				buyNum:0,
				lists:{},
				chooseColor:'黑色',
				chooseSize:'S',
				buyAmount:1,
				pro:[]
			}
		},
		components: {
			HeadCom
		},
		created(){
			this.pro = JSON.parse(localStorage.getItem('proInCart'));
			this.pro.forEach((i)=>{
				this.buyNum+=i.proAmount
			})
			var _this=this;
			fetch('/productlists',{
				method:'get'
			}).then(function(response){
				return response.text()
			}).then(function(data){
				var id=_this.$route.params.id-1
				_this.lists=JSON.parse(data).details[id]
			})
		},
		mounted(){
			var mySwiper = new Swiper ('.swiper-container', {
			    loop: false,
			    pagination: '.swiper-pagination',
			  })        
		},
		methods: {
			lessAmount(){
				if (this.buyAmount<2) {
					return 
				}else {
					this.buyAmount-=1
				}
			},
			addToCart(){
				this.pro = localStorage.getItem('proInCart');
				var a = this.pro;
				var a=JSON.parse(a);
				var goods =	{
					    'DID':new Date().getTime()+'',
						'id':this.lists.id,
						'proImg':this.lists.url1,
						'proName':this.lists.name,
						'proPrice':this.lists.price,
						'proColor':this.chooseColor,
						'proSIze':this.chooseSize,
						'proAmount':this.buyAmount
					}
				if (a==null) {
					a=[]
					a.push(goods)
					var proMsg = JSON.stringify(a);
					localStorage.setItem('proInCart',proMsg)
				}else{
					var you = a.find((ele)=>{
						return ele.id==goods.id&&ele.proColor==goods.proColor&&ele.proSIze==goods.proSIze
					})
					if (you==undefined) {
						a.push(goods)
						var proMsg = JSON.stringify(a);
						localStorage.setItem('proInCart',proMsg)
					}else {
						var idx = a.findIndex((ele)=>{
							return ele==you
						})
						you.proAmount+=goods.proAmount;
						a.splice(idx,1,you)
						var proMsg = JSON.stringify(a);
						localStorage.setItem('proInCart',proMsg)
					}
				}
				this.buyNum=0
				this.pro = JSON.parse(localStorage.getItem('proInCart'));
				this.pro.forEach((i)=>{
					this.buyNum+=i.proAmount
				})
			}
		}
	}
	
</script>

