<template>
  <div class="progress" >
        <Progress status="active" :percent="25" hide-info /></Progress>
        <EveryMoth month="2018-03" dayNum="17"/>
        <!-- <Calibration ></Calibration> -->
        <iframe :src="url" width="100%" height="100%"></iframe>
  </div>
</template>

<script>
import EveryMoth from './EveryMonth';
import Calibration from './Calibration'
 export default {
    components:{
        EveryMoth,
        Calibration
    },
    props:{
       
    },
    data(){
        return {
            url:'https://kr-pri-test.oss-cn-beijing.aliyuncs.com/op/upload/2/2018/03/08/160054455gLZckfp/%E6%96%B0%E5%BB%BA%20Microsoft%20Word%20%E6%96%87%E6%A1%A3.docx?Expires=1520497046&OSSAccessKeyId=LTAIfOVV9yKVUWa5&Signature=O32ap2zMW6YzbFdEJPFler3pk%2BE%3D'
        }
    },
    methods:{
        
    },
    mounted(){
       
    }
 }
</script>

<style lang="less" scoped> 
.progress {
    
}
</style>
