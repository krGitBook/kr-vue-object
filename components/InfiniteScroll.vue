<template>
	<div 
		class="infinite-scroll" 
		@scroll="handleScroll"
		@wheel="onWheel"
		@touchstart="onPointerDown"
		ref="scrollContainer"
		:style="{height:height+'px'}"
	>
		
    	<slot></slot>
		<Spin :show="isLoading"> </Spin>
		<div v-if="isReachBottom" class="bottom-text">--你到达了我的底线--</div>
  	</div>
</template>

<script>
import Spin from './Spin';
export default {
	components:{
		Spin,
	},
	props:{
		height:{
			default:300,
			type:[Number,String],
		},
		onReachBottom:{
			type:Function,
			default:()=>{}
		}
	},
	data(){
		return {
			isLoading:false,
			isReachBottom:false,

		}
	},
   	methods:{
    
		handleScroll(){
			const el = this.$refs.scrollContainer;

			if(this.isLoading || !el){
				return ;
			}
			const displacement = el.scrollHeight - el.clientHeight - el.scrollTop;
			/**
			 * 判断到达底部并且防止重复事件
			 */
			if(displacement <= 0 && !this.isLoading && !this.isReachBottom){
				let that = this;
				this.isLoading = true;
				let callback = this.onReachBottom();
				callback.then(()=>{
					that.isLoading = false;
				},(error)=>{
					that.isLoading = false;
					that.isReachBottom = true;
					console.log("ooppppppp")
				})
			}
			
		},
		onWheel(){

		},
		onPointerDown(){

		}
   }
}
</script>

<style lang="less" scoped> 
.infinite-scroll {
	  overflow: auto;
	  .bottom-text{
		  line-height: 30px;
		  text-align: center;
	  }
}
</style>
