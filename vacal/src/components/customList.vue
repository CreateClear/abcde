<template>
	<div id="list">
		<router-link :to='{name:"/buy",params:{id:customItem.id}}' v-for='customItem in customItems'>
			<img :src="customItem.url" alt="">
		</router-link>
	</div>
</template>
<script>
	export default {
		props:{
			customItems:Array
		}
	}
</script>
<style>
	#list {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	#list div {
		width: 50vw;
		
	}
	#list img {
		width: 50vw;
	}
</style>