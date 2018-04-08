<template>
  <div class="EveryMonth" >
     <div class="box">
         <div class="month">
             {{month}}
         </div>
         <div class="day-num">
             <div class="every-day" :key="value.id" v-for="value in dataNum">{{value}}</div>
         </div>
     </div>
  </div>
</template>

<script>
 export default {
    props:{
       month:{
            required:true,
            type:String,
       },
       dayNum:{
           required:true,
           type:[String,Number]
       },
    },
    data(){
        return {
            dataNum:this.getDayNum(),
        }
    },
    methods:{
       getDayNum(){
           var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
           num.length = this.dayNum;
           return num;
       } 
    },
    mounted(){
       
    }
 }
</script>

<style lang="less" scoped> 
.EveryMonth {
    .box{
        display: inline-block;
        box-sizing: border-box;
        border-left: solid 1px #333;
        border-bottom: solid 1px #333;

        .month{
            
            border-top: solid 1px #333;
            border-right: solid 1px #333;
            box-sizing: border-box;
            line-height: 30px;
            padding: 0 20px;
        }
        .day-num{
            display: inline-block;
            box-sizing: border-box;
        }
        .every-day{
            display: inline-block;
            border-top: solid 1px #333;
            border-right: solid 1px #333;
            box-sizing: border-box;
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center;
        }
    }
}
</style>
