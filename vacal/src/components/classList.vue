<template>
	<div id="classList">
		<router-link :to='{name:"/buy",params:{id:classItem.id}}' v-for='classItem in classItems'>
			<img :src="classItem.url" alt="">
			<span class="proName">{{classItem.proName}}</span>
		</router-link>
	</div>
</template>
<style>
	#classList {
		width: 75vw;

	}
	#classList a {
		width: 25vw;
		display: block;
		float: left;
		margin-bottom: 3vh;
		color: #000
	}
	#classList img {
		display: block;
		margin: 0 auto;
		width: 20vw;
	}
	#classList span {
		font-size: 12px;
	}
</style>
<script>
	export default {
		data(){
			return {

			}
		},
		props: {
			classItems:Array
		}
	}
</script>