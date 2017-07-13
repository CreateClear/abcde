<template>
	<div id='class'>
		<HeadCom :val='val'></HeadCom>
		<FootCom></FootCom>
		<div class="classContainer">
			<ul class="classUl">
				<li :class="{classCurr:classNum==1}" @click='classNum=1'>推荐</li>
				<li :class="{classCurr:classNum==2}" @click='classNum=2'>男装</li>
				<li :class="{classCurr:classNum==3}" @click='classNum=3'>女装</li>
				<li :class="{classCurr:classNum==4}" @click='classNum=4'>男鞋</li>
				<li :class="{classCurr:classNum==5}" @click='classNum=5'>女鞋</li>
				<li :class="{classCurr:classNum==6}" @click='classNum=6'>袜品</li>
				<li :class="{classCurr:classNum==7}" @click='classNum=7'>家居</li>
				<li :class="{classCurr:classNum==8}" @click='classNum=8'>童装</li>
				<li :class="{classCurr:classNum==9}" @click='classNum=9'>内衣</li>
			</ul>
			<div class="classListDetail">
				<ClassList :classItems='lists' v-if='classNum==1'></ClassList>
				<ClassList :classItems='lists.slice(2,9)' v-if='classNum==2'></ClassList>
				<ClassList :classItems='lists.slice(8,15)' v-if='classNum==3'></ClassList>
				<ClassList :classItems='lists.slice(5,12)' v-if='classNum==4'></ClassList>
				<ClassList :classItems='lists.slice(3,8)' v-if='classNum==5'></ClassList>
				<ClassList :classItems='lists.slice(9,15)' v-if='classNum==6'></ClassList>
				<ClassList :classItems='lists.slice(2,6)' v-if='classNum==7'></ClassList>
				<ClassList :classItems='lists.slice(5,9)' v-if='classNum==8'></ClassList>
				<ClassList :classItems='lists.slice(6,11)' v-if='classNum==9'></ClassList>
			</div>
		</div>
	</div>
</template>
<style>
	#class {
		height: 86vh;
		background: #fff
	}
	.classContainer {
		display: flex;
		justify-content: space-between;
	}
	.classUl {
		width: 25vw;
		background: #e5e5e5;
		height: 86vh;
	}
	.classUl li {
		height: 5vh;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 2px solid #fff;
		font-size: 12px;
	}
	.classListDetail {
		width: 75vw;
		display: flex;

	}
	#class .classCurr {
		background: #fff
	}
</style>
<script>
	const HeadCom = r => require.ensure([], () => r(require('@/components/head.vue')), 'HeadCom');
	const FootCom = r => require.ensure([], () => r(require('@/components/footer.vue')), 'FootCom');
	const ClassList = r => require.ensure([], () => r(require('@/components/classList.vue')), 'ClassList');

	export default {
		data:function() {
			return {
				val:'分类',
				classNum:1,
				lists:[]
			}			
		},
		components: {
			HeadCom,
			FootCom,
			ClassList
		},
		created(){
			var _this=this;
			fetch('/productlists',{
				method:'get'
			}).then(function(response){
				return response.text()
			}).then(function(data){
				_this.lists=JSON.parse(data).recommend
			})
		},
		methods: {
			handle1(){
				this.classNum=1;

			}
		}
	}
</script>