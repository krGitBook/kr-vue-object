
<template>
  <div class="tree-node">
	  <div style="padding:5px 0px 5px 0px;">
		   	<span 
			   	class="ivu-icon open-icon" 
			   	:class="{'ivu-icon-chevron-up':isOpen,'ivu-icon-chevron-down': !isOpen}"
				:style="{display:isEnd()?'inline-block':'none'}"
				@click="openIconClick"
			></span>
			
			<input :id="inputId" type="checkbox"  style="padding: 0px 2px 0px 10px;" @change="onCheckChange" >
			<span class="tree-label">{{allData.title}}</span>
	  </div>
     
        <div class="children-box" :style="{height:getBoxHeight()}" >
			<TreeNode 
				:data="item" 
			 	v-for="(item , index) in allData.children" 
				:key="item.id" 
				@onCheckChange="childrenCheckChange"
			/>
        </div>
      
  </div>
</template>
<script>

export default {
    name:'TreeNode',
	props:{
		data:{
			default:{},
			type:Object
		}
	},
    data(){
      return {
		  isOpen:false,
		  allData:this.data,
		  inputDom:'',
		  inputId:this._uid
      }
	},
	
	mounted(){
		this.inputDom = document.getElementById(this.inputId);
		this.inputDom.checked = this.allData.isSelect;
		// console.log(this.inputDom,"ooooo",this.allData.isSelect)

	},
	methods:{
		openIconClick(){
			this.isOpen = !this.isOpen;
		},
		isEnd(){
			if(this.allData.children && this.allData.children.length){
				return true;
			}
			return false;
		},
		onCheckChange(event){
			
			
			this.allData.isSelect = event.target.checked;
			console.log(this.allData,"ppppppp")
			this.$emit('onCheckChange',this.allData);
		},
		getBoxHeight(){
			if(this.isOpen && this.data.children && this.data.children.length){
				return  'auto';
			}else{
				return 0;
			}
		},
		childrenCheckChange(event){
			
			this.inputDom.checked = this.theNodeSelsct(this.replaceNode(event,this.allData.children));
			console.log(event,"oooooo")
			// console.log( this.theNodeSelsct(this.allData.children),"-----")
			this.$emit('onCheckChange',event);
		},
		replaceNode(event,data=[]){
			
			for (let index = 0; index < data.length; index++) {
				const element = data[index];
				if(element.t_id == event.t_id){
					data[index] = event;
					return data;
				}
				
			}
		},

		theNodeSelsct(arr=[]){
			for (let index = 0; index < arr.length; index++) {
				const element = arr[index];
				if(element.isSelect){
					return true;
				}
				return false;
			}
		}
	}
}
</script>

<style lang="less" scoped>
 .tree-node{
	 .tree-label{
		 display: inline-block;
		
	 }
	 .children-box{
		 padding:0px 25px 0px 25px;
		 overflow: hidden;
		 transition: all 0.3s;
	 }
	 .open-icon{
		 cursor: pointer;
	 }
 }
</style>