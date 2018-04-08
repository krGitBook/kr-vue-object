<template>
  <div class="search-to-location">
     <Input v-model="value" placeholder="Enter something..." style="width: 300px" @on-enter="enderTool"  />
     <div :id="boxId">
         <slot name="content" ></slot>
     </div>
     
  </div>
</template>

<script>
 export default {
    props:{
     
    },
    data(){
        return {
            value:'',
            keyNum:0,
            oldValue:'',
            oldContent:'',
            boxId:"box"+this._uid,
            htmlBox:''
        }
    },
    methods:{
       enderTool(event){
           console.log("oooo")
        //    return;
            var inputValue = event.target.value,
                childContet =  this.htmlBox.innerHTML;

          
            
            var regExp = new RegExp(inputValue, 'g')
            if (!inputValue||!regExp.test(childContet)) {
                this.htmlBox.innerHTML = this.oldContent;
                this.oldValue = '';
                alert("什么都没有",inputValue)
                return;
            }else{
                inputValue = inputValue.replace(/\s+/g,"");
                var NodeLenght = 0
                
                if(this.oldValue !== inputValue){
                    console.log("11111",this.oldContent,inputValue)
                    childContet = this.oldContent;

                    childContet = childContet.replace(regExp,'<span class="height">'+inputValue+'</span>')
                   
                    this.htmlBox.innerHTML = childContet;
                  
                }
                var nodes = this.getNode('.height');
                NodeLenght= nodes.length;
                this.goLocaltion(nodes,this.keyNum)
                this.oldValue = inputValue;


              

                if(this.keyNum == NodeLenght-1){
                    this.keyNum = 0;
                }else{
                    this.keyNum++;
                }
                

                
            }
         
       },
       getNode(dom){
           return document.querySelectorAll(dom);
       },
       goLocaltion(nodes,i){
            var top = 0;
            top = this.getElementTop(nodes[i])
            console.log(top,"kkkkk")
            var dom = this.getNode('.layout-content')[0]
            console.log(dom);
            dom.scrollTop = top-100 ;
       },

        getElementTop(element){
    　　　　var actualTop = element.offsetTop;
    　　　　var current = element.offsetParent;

    　　　　while (current !== null){
    　　　　　　actualTop += current.offsetTop;
    　　　　　　current = current.offsetParent;
    　　　　}

    　　　　return actualTop;
    　　}
    },
    mounted(){
        this.htmlBox = document.getElementById(this.boxId);
        console.log(this.htmlBox)
        this.oldContent = this.htmlBox.innerHTML;
        //  console.log("11111",this.oldContent)
    },
   
 }
</script>

<style lang="less"> 
.search-to-location {
   
}
 .height{
        background: yellow; color: red;
    }
</style>
