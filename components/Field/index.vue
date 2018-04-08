<template>
  <div class="field" v-if="show">
  
  </div>
</template>

<script>
 export default {
    props:{
        name:String,
        type:{
            default:'input',
            tyoe:String
        },
        value:{
            default:'',
            type:[String,Number]
        }
    },
    data(){
        return{
           
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
.field {
    
}



</style>
