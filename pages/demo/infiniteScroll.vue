<template>
  <InfiniteScroll :show="true" :onReachBottom="handleReachBottom">
    <div 
      class="item-div"
      v-for="item in scrollData"
      :key="item.id"
      height="100"
      

    >
      {{item}}
    </div>
  </InfiniteScroll>
</template>

<script>
import InfiniteScroll from '~/components/InfiniteScroll'
// import pdfurl from '~/plugins/Images.pdf'
export default {
  components: {
    InfiniteScroll
  },
  data(){
    return {
      scrollData:[1,2,3,4,5,6,7,8],
    }
  },
  methods:{
    handleReachBottom(){
		let that = this;
      	return new Promise((resolve,reject) => {
			setTimeout(() => {
				for(let i=0;i<5;i++){
					let num = Math.ceil(Math.random()*10);
					that.scrollData.push(num);
				}
				if(that.scrollData.length<20){
					resolve();
				}else{
					reject();
				}
				
			}, 2000);
		});
    }
  }
}
</script>
<style lang="less" scoped> 
  .item-div{
    margin: 10px;
    text-align: center;
    line-height: 40px;
    background: burlywood;
  }
</style>
