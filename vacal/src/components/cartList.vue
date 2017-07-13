<template>
	<div id="cartList">
		<div class='cartHead'>
			<span>在售商品:</span>
			<div class="cartChange">
				<button class="all" @click='handleAll'>{{btnVal}}</button>
				<button class="del" @click='handleDel'>删除</button>
			</div>
		</div>
		<div class="cartListBox" v-for='(item,idx) in lists'>
			<input type="checkbox" class="cartProCheck" v-model='checked' :value="item.DID">
			<img :src="item.proImg" alt="" class="cartProImg">
			<div class="cartDetail">
				<p class="cartProName">{{item.proName}}</p>
				<p class="cartProCS">
					<span class="cartProColor">颜色: {{item.proColor}}</span>
					<span class="cartProSize">尺码: {{item.proSIze}}</span>
				</p>
				<div class="cartProPA">
					<span class="cartProPrice">￥{{item.proPrice}}元</span>
					<button class="cartProLess"  @click='handleLess(idx)'><img src="http://m.vancl.com/Content/H5/img/reduce.png" alt=""></button>
					<input type="text" class="cartProAmount" :value='item.proAmount'>
					<button class="cartProPlus" @click='handlePlus(idx)'><img src="http://m.vancl.com/Content/H5/img/n-plus.png" alt=""></button>
				</div>
			</div>
			<div class="delBox">
				<img class="delImg" src="http://m.vancl.com/Content/H5/img/del-car.png" alt="" @click='handleDelOne(idx)'>
			</div>
			<div class="hr"></div>

		</div>
	</div>
</template>
<style>
	#cartList {

	}
	.cartHead {
	padding: 0 4vw;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	height: 5vh;
	font-size: 14px;
	align-items: center;
	}
	.cartHead button {
		width: 12vw;
		font-size: 12px;
		border: none;
		background: #b81c22;
		color: #fff;
		border-radius: 4px;
		margin-left: 1vw;
		outline: none
	}

	.cartListBox {
		width: 100vw;
		height: 25vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		margin-bottom: 5vh;
	}
	.cartProCheck {
		width: 10vw;
	}	
	.cartProImg {
		width: 25vw;
	}
	.cartDetail {
		height: 100%;
		font-size: 12px;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		width: 45vw;
	}
	.cartProName {
		text-align: left;
	}
	.cartProCS {
		display: flex;
	}
	.cartProCS span {
		margin-right: 8vw;
	}
	.cartProPA {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.cartProPrice {
		color: #b81c22
	}
	.cartProPA button {
		width: 8vw !important;
		border: none;
		height: 8vw;
		outline: none
	}
	.cartProPA button img {
		width: 8vw;
	}
	.cartProAmount {
		width: 6vw;
		height: 6vw;
	}
	.delBox {
		width: 20vw;
	}
	.delImg {
		width: 5vw;
	}
	.hr {
		width: 90vw;
		border-top: 1px solid #eee;
		position: absolute;
		left: 5vw;
		bottom: -2vh;
	}
</style>
<script>
	export default {
		data(){
			return {
				lists:[],
				btnVal:'全不选',
				checked:[],
				msg:0,
				pay:0,
				upData:{},
				num:0
			}
		},
		methods:{
			handleAll(){
				if (this.btnVal=='全选') {
					this.btnVal='全不选';
					this.lists.forEach((i)=>{
						this.checked.push(i.DID)
					})
				}else {
					this.btnVal='全选';
					this.checked.length=0;
				}
			},
			handleDel(){
				var proArr=this.lists
				this.checked.forEach((did)=>{
					var idx = proArr.findIndex((ele)=>{
						return ele.DID==did
					})
					proArr.splice(idx,1)
				})
				this.checked.length=0
				this.msg=proArr.length?1:0
				this.pay=0
				proArr=JSON.stringify(proArr)
				localStorage.setItem('proInCart',proArr)
			},
			handleLess(idx){
				var proAmount = this.lists[idx].proAmount
				if (proAmount==1) {
					return false
				}
				this.lists[idx].proAmount--
				var newLists = JSON.stringify(this.lists)
				localStorage.setItem('proInCart',newLists)
			},
			handlePlus(idx){
				var proAmount = this.lists[idx].proAmount
				if (proAmount>9) {
					return false
				}
				this.lists[idx].proAmount++
				var newLists = JSON.stringify(this.lists)
				localStorage.setItem('proInCart',newLists)
			},
			handleDelOne(idx){
				var newLists=this.lists
				
				var index = this.checked.findIndex((i)=>{
					return newLists[idx].DID==i
				})
				newLists.splice(idx,1)
				if (index!=-1) {
					this.checked.splice(index,1)
				}
				this.msg=newLists.length?1:0
				newLists = JSON.stringify(newLists)
				localStorage.setItem('proInCart',newLists)
			}
		},
		created(){
			this.lists = JSON.parse(localStorage.getItem('proInCart'));
			this.lists.forEach((i)=>{
				this.checked.push(i.DID)
				this.pay+=(i.proPrice*i.proAmount)
			})
			this.checked.forEach((did)=>{
				var idx = this.lists.findIndex((ele)=>{
					return ele.DID==did
				})
				this.num+=this.lists[idx].proAmount
			})
			this.upData={
				'pay':this.pay,
				'num':this.num
			}
			this.$emit('change',this.upData)
		},
		updated(){
			var inChecked = this.lists
			var i = {}
			this.pay=0
			this.checked.forEach((did)=>{
				i = inChecked.find((ele)=>{
					return did==ele.DID
				})
				if (i!=undefined) {
					this.pay+=i.proPrice*i.proAmount
				}else{
					this.pay=0
				}
			})
			this.num=0
			this.checked.forEach((did)=>{
				var idx = inChecked.findIndex((ele)=>{
					return ele.DID==did
				})
				this.num+=inChecked[idx].proAmount
			})
			this.msg=this.lists.length?1:0
			this.upData={
				'pay':this.pay,
				'num':this.num,
				'msg':this.msg
			}
			this.$emit('change',this.upData)
			if (this.checked.length==0) {
				this.btnVal='全选';
			}
			if (this.checked.length==this.lists.length) {
				this.btnVal='全不选';
			}
		}
	}
</script>
