<template>
  <div class="spin" v-if="show">
      <input type="file" name="file" />
  </div>
</template>

<script>
 export default {
    props:{
        show:{
            default:true,
            type:Boolean
        }
    },
    data(){
        return{
            showText:false,
        }
    },
    methods:{
        handleClick(event){
        this.$emit('click',event)
        }
    },
    mounted(){
        this.showText = this.$slots.default !== undefined;
    }
 }
</script>

<style lang="less" scoped> 
.spin {
    text-align: center;
    .default-loading{
        display: inline-block;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background-color: #2d8cf0;
        animation: ani-spin-bounce 1s 0s ease-in-out infinite;
    }
}
</style>
