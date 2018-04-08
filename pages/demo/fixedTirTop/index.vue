<template>
<div>
    <Every v-for="item in data" :key="item.id" :data="item"/>
    <div id="tip"></div>
</div>
</template>

<script>
import Every from './every'
export default {
  components: {
      Every
  },
  data(){
      return {
          data:[1,2,3,4,5,6,7,8,9,0],
      }
  }
}
</script>
<style lang="less" scoped>
#tip{
    width: 100px;
    height: 100px;
    display: none;
    background: brown;
    position:fixed;
    top: 0px;
    left: 0px;
    border-radius: 4px;
}
#tip::before{
    content: '';
    position: absolute;
    display:block;
    // margin:10px;
    width:0;
    height:0;
    border-style:solid;
    border-width:5px;
    top: -10px;
    left: 10px;
    border-color:transparent transparent  #00f  transparent;
}
</style>
