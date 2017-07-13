<template>
	<div id="list">
		<router-link :to='{name:"/buy",params:{id:item.id}}' v-for='item in lists'>
			<img :src="item.url" alt="">
		</router-link>
	</div>
</template>
<script>
	export default {
		props:{
			lists:Array
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
		width: 49.5vw;
		
	}
	#list img {
		width: 49.5vw;
	}
</style>