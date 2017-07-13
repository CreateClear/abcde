<template>
	<div id="head">
		<div class="back" @click='handleBack'></div>
		{{val}}
	</div>
</template>
<script>

	export default {
		data:function(){
			return {}
		},
		props:['val'],
		methods: {
			handleBack(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style>
	#head {
		background: #b81c22;
		width: 100vw;
		height: 8vh;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		position: relative;
	}
	.back {
		width: 3vw;
		height: 3vw;
		border-bottom: 1px solid #fff;
		border-left: 1px solid #fff;
		transform: rotate(45deg);
		position: absolute;
		left: 5vw;
		top: 0;
		bottom: 0;
		margin: auto
	}
</style>