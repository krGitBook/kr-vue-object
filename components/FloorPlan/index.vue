<template>
	<div class="floor-plan">
        <div  class="floor-plan-top-toolbar" >
           <Checkbox :value="true">网格</Checkbox>
           <Button type="ghost" shape="circle" icon="reply" >撤回</Button>
           <Button type="ghost" shape="circle" icon="forward" >前进</Button>
           <Button type="ghost" shape="circle" icon="reply-all" >清空</Button>
           <Button type="ghost" shape="circle" icon="filing" >保存</Button>
           <Button type="ghost" shape="circle" icon="filing" >预览</Button>
           <Button type="ghost" shape="circle" icon="filing" >全选</Button>
           <Button type="ghost" shape="circle" icon="arrow-expand" >全屏</Button>
           <Button type="ghost" shape="circle" icon="arrow-shrink" >恢复</Button>
           <Button type="ghost" shape="circle" icon="ios-plus" >放大</Button>
           <Button type="ghost" shape="circle" icon="ios-minus" >缩小</Button>
           <Button type="ghost" shape="circle" icon="ios-minus" >编辑</Button>
        </div>
        <div class="floor-plan-left-toolbar"> 
            
        </div>
        <div class="floor-plan-right-toolbar" >
            <div class="over-view" ></div>
        </div>
        <div 
            class="floor-plan-content" 
        >
            <div 
                
                class="drawing-board"
                
            ></div>
            
        </div>
	</div>
</template>

<style lang="less" scoped>
.floor-plan{
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    padding-top: 50px;
    padding-left: 200px;
    padding-right: 200px;
    background: #DAE4E4;
    transition: all 0.3 ease;
    .floor-plan-top-toolbar{
        position: absolute;
        height: 50px;
        width: 100%;
        top: 0px;
        left: 0px;
        background: #F6F6F6;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .floor-plan-left-toolbar,.floor-plan-right-toolbar{
        position: absolute;
        top: 52px;
        bottom: 0px;
        width: 200px;
        background: #F6F6F6;
        box-shadow: 0px 1px 1px rgba(0,0,0,.3);
    }
    .floor-plan-right-toolbar{
        right:0px;
        .over-view{
            width: 180px;
            height: 180px;
            box-sizing: border-box;
            margin: 10px;
            background: #66CC66;
        }
    }
    .floor-plan-left-toolbar{
         left: 0px;
         .select-toolbar{
             height: 600px;
             width: 100%;
         }
    }
    .floor-plan-content{
        .drawing-board{
          box-sizing: border-box;
          margin: 10px;
          border: 1px solid #E5E5E5;
          max-width: 100%;
        }
    }
}
</style>
