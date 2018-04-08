<template>
<div>
    <div @mouseover="over" @mouseout="out" class="content">
        {{data}}
    </div>
</div>
</template>

<script>
// import pdfurl from '~/plugins/Images.pdf'
export default {
    name:'Every',
  components: {
  },
  props:{
    data:{
        type:[String,Number],
    }
  },
  data(){
      return {
        
      }
  },
  methods:{
      over(event){
          var dom = event.target;
          var detail = dom.getBoundingClientRect();
          var tirDom = document.getElementById('tip');
          tirDom.style.display = "inline-block";
          var tirLocation = {
              left:detail.left,
              top:detail.top+detail.height
          }
          var str = '<div>'+'计划'+'</div>'
           str += '<div>'+'计划开始时间：2016/7/8--1028/3/3'+'</div>'
          tirDom.innerHTML = str;
            tirDom.style.left = tirLocation.left + 'px';
            tirDom.style.top  = tirLocation.top +5+ 'px';
          console.log("-------",detail)
      },
      out(event){
            var tirDom = document.getElementById('tip');
          tirDom.style.display = "none";
      }
  }
}
</script>
<style lang="less" scoped>
    .content{
        text-align: center;
        background: chartreuse;
        line-height: 40px;
        margin: 10px 0px;
    }
</style>
