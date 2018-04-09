<template>
<div>
   <Spin :show="true">
    加载中...
  </Spin>
  <toast-component/>
</div>
  
</template>

<script>
import Spin from '~/components/Spin'
// import pdfurl from '~/plugins/Images.pdf'
export default {
  components: {
    Spin
  },
  mounted(){
    // console.log(this.$msg); 
  }
}
</script>