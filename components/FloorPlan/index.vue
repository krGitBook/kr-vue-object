<template>
    <div class="flow-chart-box" :style="boxStyle">
        <div  class="flow-chart-top-toolbar" v-show="isTopBar" :style="topToobarStyle">
           
        </div>

        <div class="flow-chart-right-toolbar" >
            <div class="over-view" :id="overview" v-show="isMap"></div>
            <div class="node-attrbute">
                <slot name="attrbute"></slot> 
            </div>
        </div>

        <div class="flow-chart-content">
            <div :id="drawingBoard" class="drawing-board" :style="{height:500+'px',background:'#f5f5f5'}"></div>  
        </div>

        <div id="gantt-chart-tool-tip"></div>
        <div id="gantt-chart-tool-tip-triangle" class="bottom-triangle"></div>
        
    </div>
</template>

<script>
import init from './plan';
 export default {
    props:{
        show:{
            default:true,
            type:Boolean
        },
        type:{
            default:'edit',
            type:String
        },
        isMap:{
            default:true,
            type:Boolean
        },
        isLeftBar:{
            default:true,
            type:Boolean
        },
        isTopBar:{
            default:true,
            type:Boolean
        }
    },
    data(){
        return{
            showText:false,
            overview:'overPlanview' + this._uid,
            drawingBoard:'drawingPlanBoard' + this._uid,
            fruit:['网格'],
            flowChart:null,
            boxStyle:{},
            topToobarStyle:{},
            isEdit:true,
        }
    },
    methods:{
       
        getGraphics(type){
            //return type;
        },
        gridCheckChange(ev){

            //this.flowChart.diagram.grid.visible = ev;
        },
        allRemove(){
            
            // this.flowChart.diagram.commandHandler.selectAll();
            // this.flowChart.diagram.commandHandler.deleteSelection(); 
        },
        allSelect(){
           //this.flowChart.diagram.commandHandler.selectAll(); 
        },
        undo(){
           //this.flowChart.diagram.commandHandler.undo(); 
        },
        redo(){
            //this.flowChart.diagram.commandHandler.redo(); 
        },
        save(){
            // var myDiagram = this.flowChart.diagram;
            // myDiagram.model.modelData.position = go.Point.stringify(myDiagram.position);
            // var allData = myDiagram.model.toJson();
            // alert(allData)
        },
        preview(){
            // var myDiagram = this.flowChart.diagram;
            // myDiagram.isReadOnly  = true;
            // this.isEdit = false;
            // this.flowChart.diagram.grid.visible = false;
            // this.boxStyle = {paddingLeft:0}
        },
        fullScreen(){
            // this.boxStyle = {
            //     position:'fixed',
            //     left:0,
            //     top:0,
            //     zIndex:1000
            // };
            // this.topToobarStyle = {
            //     lineHeight:50+'px',
            //     padding:'0px 50px'
            // };
        },
        restore(){
            // this.boxStyle = {};
            // this.topToobarStyle = {};
        },
        zoom(isAdd){
            // var scale = this.flowChart.diagram.scale;
            // var newScale = scale + 0.01;
            // if(!isAdd && scale>0.01){
            //     newScale = scale - 0.01;
            // }
            // this.flowChart.diagram.commandHandler.resetZoom(newScale)
        },
        edit(){
           
            // this.isEdit = true;
            // var myDiagram = this.flowChart.diagram;
            // myDiagram.isReadOnly  = false;
            // this.boxStyle={};
            // this.flowChart.diagram.grid.visible = true;


        }
    },
    mounted(){
       this.flowChart =  init(go,this.drawingBoard,this.overview)
    }
 }
</script>

<style lang="less" scoped> 
.flow-chart-box {
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    padding-top: 50px;
    padding-right: 200px;
    background: #DAE4E4;
    transition: all 0.3 ease;
    .flow-chart-top-toolbar{
        position: absolute;
        height: 50px;
        width: 100%;
        top: 0px;
        left: 0px;
        background: #F6F6F6;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .flow-chart-left-toolbar,.flow-chart-right-toolbar{
        position: absolute;
        top: 52px;
        bottom: 0px;
        width: 200px;
        background: #F6F6F6;
        box-shadow: 0px 1px 1px rgba(0,0,0,.3);
    }
    .flow-chart-right-toolbar{
        right:0px;
        .over-view{
            width: 180px;
            height: 180px;
            box-sizing: border-box;
            margin: 10px;
            background: #66CC66;
        }
    }
    .flow-chart-left-toolbar{
         left: 0px;
         .select-toolbar{
             height: 600px;
             width: 100%;
         }
    }
    .flow-chart-content{
        .drawing-board{
          box-sizing: border-box;
          margin: 10px;
          border: 1px solid #E5E5E5;
          max-width: 100%;
        }
    }

     #gantt-chart-tool-tip{
            max-width: 280px;
            opacity: 0;
            background: rgba(70,76,91,.9);
            position: absolute;
            top: 0px;
            left: 0px;
            border-radius: 4px;
            padding: 5px;
            color: #ffffff;
            z-index: 999;
            transition: all .1s;
            pointer-events:none;
            .title{
                font-size: 14px;
                background: transparent;
                display:inline-block;
                vertical-align: middle;
            }
            .content{
                font-size: 14px;
                padding: 0px;
                background: transparent;
                display:inline-block;
                vertical-align: middle;
            }
        }
        .top-triangle{
            border-color: rgba(70,76,91,.9) transparent transparent transparent;
        }
        .bottom-triangle{
            border-color: transparent transparent rgba(70,76,91,.9)  transparent;
        }
        #gantt-chart-tool-tip-triangle{
            opacity: 0;
            position: absolute;
            display:block;
            width:0;
            height:0;
            border-style:solid;
            border-width:5px;
            top: -10px;
            left: 10px;
            transition: all .1s;
            z-index: 999;
        }
}



</style>
