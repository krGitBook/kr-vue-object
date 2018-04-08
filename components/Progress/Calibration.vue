<template>
  <div class="Calibration" >
      <EveryMonth />
  </div>
</template>

<script>
import EveryMonth from './EveryMonth'
export default {
    components:{
        EveryMonth
    },
    props:{
       startTime:{
           default:'2016-01-01',
           type:[String,Number]
       },
       endTime:{
            default:'2020-12-12',
            type:[String,Number]
       }
    },
    data(){
        return {

        }
    },
    methods:{
        getDaysInOneMonth(year, month){  
            month = parseInt(month, 10);  
            var d= new Date(year, month, 0);  
            return d.getDate();  
        },
        getAllMonth(){
            var start = this.stringToNum(this.startTime.split('-')),
                end = this.stringToNum(this.endTime.split('-'));
            
        },
        stringToNum(arr){
            for (var i = 0; i < arr.length; i++) {
                arr[i] = +arr[i]
            }
            return arr;
        }

    },
    mounted(){
        for(let i=1;i<=12;i++){
            // console.log("-----------")
            console.log(this.getDaysInOneMonth(2018,i),"pppppp");
        }
       
    }
 }
</script>

<style lang="less" scoped> 
.Calibration {
    
}
</style>
