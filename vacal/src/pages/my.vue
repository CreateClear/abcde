<template>
	<div>
		<HeadCom :val='val'></HeadCom>
		<img src="../../static/imgs/my.png" alt="">
		<FootCom></FootCom>
	</div>
</template>
<script>
	const HeadCom = r => require.ensure([], () => r(require('@/components/head.vue')), 'HeadCom');
	const FootCom = r => require.ensure([], () => r(require('@/components/footer.vue')), 'FootCom');

	export default {
		data(){
			return {
				val:'个人中心'
			}
		},
		components: {
			HeadCom,
			FootCom
		}
	}
</script>
<style>
	
</style>