<template>
	<div id="cart-null">
		<HeadCom :val='val'></HeadCom>
		<div class="cartBox" v-if='msg==0'>
			<div class="cartBoxOutFt">
				<div class="shoppingCart"><img src="http://m.vancl.com/Content/H5/img/null-car.png" alt=""></div>
				<div class="collection">
					<a href="http://m.vancl.com//Favorite/Index">我的收藏</a>
					<router-link to='/home'>去逛逛</router-link>
				</div>
				<div class="goMy">
					<router-link to='/'>{{username}}</router-link> 
					|
					<router-link to='/log'>退出</router-link>
				</div>
				<ul class="link">
					<li><a href="http://m.vancl.com/help/default/131"><img src="http://i10.m.vancl.com/Content/H5/img/help1.png" alt=""></a></li>
					<li><a href="http://m.vancl.com/app/d"><img src="http://i10.m.vancl.com/Content/H5/img/download1.png" alt=""></a></li>
					<li><a href="http://m.vancl.com/help/default/156"><img src="http://i10.m.vancl.com/Content/H5/img/weixin1.png" alt=""></a></li>
					<li><a href="http://www.vancl.com/?gotowap=0"><img src="http://i10.m.vancl.com/Content/H5/img/pcsite1.png" alt=""></a></li>
				</ul>
				<p class="beian">京ICP证100557号</p>
			</div>
			<FootCom></FootCom>
		</div>
		<div class="cart" v-else>
			
			<CartLiCom @change='handleChange'></CartLiCom>
			<div class="cartFoot">
				<div class="totalPrice">
					<p>需支付:<span>￥{{pay}}元</span></p>
					<p class="price">总金额:￥{{price}}元 已优惠:￥{{offer}}元</p>
				</div>
				<button class="settlement">结算（{{num}}）</button>
			</div>
		</div>
		
	</div>

</template>
<style>
	.cart {
		
	}
	.cartFoot {
		width: 100%;
		display: flex;
		justify-content: space-between;
		position: fixed;
		bottom: 0;
		padding: 1vh 5vw;
		box-sizing: border-box;
		background: #f5f5f5;
		border-top: 1px solid #999;
	}
	.totalPrice {

	}
	.totalPrice p {
		text-align: left;
	}
	.totalPrice p span {
		color: #b81c22
	}
	.totalPrice .price {
		font-size: 12px;
	}
	.settlement {
		background: #b81c22;
		border: none;
		width: 30vw;
		color: #fff;
		font-size: 16px;
		font-weight: bold;
		
	}
</style>
<style>
	#cart-null {
		background: #fff;
		height: 100vh;
	}
	.cartBoxOutFt {
		padding: 0 6vw
	}
	.shoppingCart {
		width: 100%;
		height: 35vh;
		border: 2px solid #ccc;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 6vw;
		box-sizing: border-box;
	}
	.shoppingCart img {
		width: 40vw;
	}
	.collection {
		display: flex;
		justify-content: space-between;
	}
	.collection a {
		display: flex;
		width: 48%;
		height: 5vh;
		justify-content: center;
		align-items: center;
		margin: 3vh 0;
		background: #f5f5f5;
		font-size: 12px;
	}
	.goMy {
		margin: 5vh 0;
	}
	.goMy a {
		color: #4c4c4c
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
	const HeadCom = r => require.ensure([], () => r(require('@/components/head.vue')), 'HeadCom');
	const FootCom = r => require.ensure([], () => r(require('@/components/footer.vue')), 'FootCom');
	const CartLiCom = r => require.ensure([], () => r(require('@/components/cartList.vue')), 'CartLiCom');

	export default {
		data(){
			return {
				val:'购物车',
				username:'Clear',
				msg:0,				
				pay:0,
				price:0,
				offer:0,
				num:0
			}
		},
		components: {
			HeadCom,
			FootCom,
			CartLiCom
		},
		methods:{
			handleChange(data){
				this.msg=data.msg
				this.pay=data.pay
				this.price=this.pay
				this.num=data.num
			}
		},
		created(){
			var isPro = localStorage.getItem('proInCart');
			isPro=JSON.parse(isPro)
				if (isPro.length==0) {
					this.msg=0
				}else{
					this.msg=1
				}
		}
	}
</script>