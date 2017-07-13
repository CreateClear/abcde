<template>
	<div id="custom">
		<HeadCom :val='val'></HeadCom>
		<div class="customBox">
			<a href="/channel/index/1085?ref=MobilePD_srdz_979_1_topic_1"><img class="customTitleImg" src="http://i5.m.vancl.com/q80/wap/2017_6_30_17_19_6_3531.jpg" alt=""></a>
			<img class="customTitleImg" src="http://i9.m.vancl.com/q80/wap/2017_4_19_13_50_36_6372.jpg" alt="">
			<img class="customTitleImg" src="http://i2.m.vancl.com/q80/wap/2017_4_10_10_18_16_8932.jpg" alt="">
			<img class="customTitleImg" src="http://i6.m.vancl.com/q80/wap/2017_4_10_10_18_26_6970.jpg" alt="">
			<img class="customTitleImg" src="http://i7.m.vancl.com/q80/wap/2017_4_10_10_18_41_8849.jpg" alt="">
			<img class="customTitleImg" src="http://i3.m.vancl.com/q80/wap/2017_4_10_10_18_49_3364.jpg" alt="">
			<CustomList :customItems='lists.slice(0,2)'></CustomList>
			<img class="customTitleImg" src="http://i9.m.vancl.com/q80/wap/2017_5_26_14_9_16_732.jpg" alt="">
			<img class="customTitleImg" src="http://i5.m.vancl.com/q80/wap/2017_4_10_10_19_59_2131.jpg" alt="">
			<CustomList :customItems='lists.slice(2)'></CustomList>
			<img class="customTitleImg" src="http://i6.m.vancl.com/q80/wap/2017_5_8_14_12_51_7667.jpg" alt="">
		</div>
		<FootCom></FootCom>
	</div>
</template>
<script>
	const HeadCom = r => require.ensure([], () => r(require('@/components/head.vue')), 'HeadCom');
	const FootCom = r => require.ensure([], () => r(require('@/components/footer.vue')), 'FootCom');
	const CustomList = r => require.ensure([], () => r(require('@/components/customList.vue')), 'CustomList');

	export default {
		data(){
			return {
				val:'高级定制',
				lists:[]
			}
		},
		components: {
			HeadCom,
			FootCom,
			CustomList
		},
		created(){
			var _this=this;
			fetch('/productlists',{
				method:'get'
			}).then(function(response){
				return response.text()
			}).then(function(data){
				_this.lists=JSON.parse(data).customlist
			})
		}
	}
</script>
<style>
	.customBox {
		margin-bottom: 6vh;
	}
	.customTitleImg {
		width: 100vw;
	}
</style>