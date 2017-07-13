<template>
	<div id="footer">
		<ul>
		    <li><router-link to='/home'></router-link></li>
		    <li><router-link to='/class'></router-link></li>
		    <li><router-link to='/custom'></router-link></li>
		    <li><router-link to='/cart'></router-link><span>{{buyNum}}</span></li>
		   	<li><router-link to='my'></router-link></li>
		</ul>
    </div>
</template>
<script>
	export default {
		data(){
			return {
				buyNum:0
			}
		},
		created(){
			this.pro = JSON.parse(localStorage.getItem('proInCart'));
			this.pro.forEach((i)=>{
				this.buyNum+=i.proAmount
			})
		}
	}
</script>
<style>
	#footer ul {
		width: 100vw;
		height: 6vh;
		display: flex;
		border-top: 1px solid #ccc;
		position: fixed;
		bottom: 0
	}
	#footer li {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #fff;
		position: relative
	}
	#footer li span {
		display: block;
		position: absolute;
		top: 0;
		left: 12vw;
		width: 2vh;
		height: 2vh;
		background: #b81c22;
		color: #fff;
		border-radius: 50%;
		font-size: 12px
	}
	#footer li a {
		display: block;
		width: 4.5vh;
		height: 6vh;
		background-size: 4.5vh 60vh !important; 
	}
	#footer li:nth-of-type(1) a {
		background: url(http://m.vancl.com/Content/H5/img/navBgimgNew.png) no-repeat ;
	}
	#footer li:nth-of-type(2) a {
		background: url(http://m.vancl.com/Content/H5/img/navBgimgNew.png) no-repeat 0 -6vh;
	}
	#footer li:nth-of-type(3) a {
		background: url(http://m.vancl.com/Content/H5/img/navBgimgNew.png) no-repeat 0 -12vh;
	}
	#footer li:nth-of-type(4) a {
		background: url(http://m.vancl.com/Content/H5/img/navBgimgNew.png) no-repeat 0 -18vh;
	}
	#footer li:nth-of-type(5) a {
		background: url(http://m.vancl.com/Content/H5/img/navBgimgNew.png) no-repeat 0 -24vh;
	}
	#footer li:nth-of-type(1) .router-link-active {
		background-position: 0 -30vh !important
	}
	#footer li:nth-of-type(2) .router-link-active {
		background-position: 0 -36vh !important
	}
	#footer li:nth-of-type(3) .router-link-active {
		background-position: 0 -42vh !important
	}
	#footer li:nth-of-type(4) .router-link-active {
		background-position: 0 -48vh !important
	}
	#footer li:nth-of-type(5) .router-link-active {
		background-position: 0 -54vh !important
	}
</style>