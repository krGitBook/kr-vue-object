<template>
<div>
   <KrImg v-for="(item,index) in imgs" :key="index" :src="item" width="300" height="200" type="center"/>
</div>
  
</template>
<script>
import KrImg from '~/components/KrImg'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
export default {
  components: {
    KrImg
  },
  data(){
      return {
          imgs:[img1,img2,img3]
      }
  }
}
</script>