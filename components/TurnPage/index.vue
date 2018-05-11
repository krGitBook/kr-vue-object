<template>
	<div class="turn-page"  @mousemove="mousemove">
        <div class="page1">The book is described as "[chronicling] the roller-coaster life and searingly intense personality of a creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing."In just over 600 pages, the book covers Jobs' entire life, from his childhood in his adoptive parents' home in California to his three bouts with pancreatic cancer. Early chapters include one on his relationship with Steve Wozniak and Jobs' brief stint at Hewlett-Packard, Reed College, Atari, and a formative trip to India to find himself. A chapter each is devoted to the development of the Apple I, Apple II, Lisa, and the classic Macintosh during his early years, the founding of NeXT and funding of Pixar when he was ousted from Apple, and Jobs' triumphant and incredibly productive return to Apple starting in 1997. Following the latter "second coming" of Jobs, Isaacson chronicles the development</div>
        <div id="page2" class="page2" 
            @mousedown="mousedown" 
            @mouseup="mouseup"
        >
            <div class="content" style="width:400px">Steve Jobs is the authorized biography of Steve Jobs. The biography was written at the request of Jobs by acclaimed biographer Walter Isaacson, a former executive at CNN and Time who has written best-selling biographies about Benjamin Franklin and Albert Einstein.Based on more than forty interviews with Jobs conducted over two years—in addition to interviews with more than one hundred family members, friends, adversaries, competitors, and colleagues—Isaacson was given "exclusive and unprecedented" access to Jobs's life. Jobs is said to have encouraged the people interviewed to speak honestly. Although Jobs cooperated with the book, he asked for no control over its content other than the book's cover, and waived the right to read it before it was published.</div></div>
	</div>
</template>
<script>
var isMouseDown = false;
var tuckUpPage={
        width:30,
        toLeft:0,
    }
var tuckUpDom = '';
export default {
 
	props:{
		
		
    },
    mounted(){
        tuckUpDom = document.getElementById("page2");
        let tuckUpDetail = tuckUpDom.getBoundingClientRect();
        tuckUpPage.toLeft = tuckUpDetail.left;
        this.drawPage(tuckUpDom,30);
    },
	data(){
		return {
		
		}
	},
   	methods:{
            mousedown(){
                isMouseDown = true;
            },
            mouseup(){
                isMouseDown = false;
            },
            mousemove(event){
                if(isMouseDown){
                    var x = event.clientX;
                    var y = event.clientY;
                    tuckUpDom.style.width = x - tuckUpPage.toLeft + 'px';
                    // console.log(x,y,"lllllll")
                }
            },
            drawPage(dom,width){
                dom.style.width = width + 'px';
            }
    }
}
</script>

<style lang="less" scoped>

.turn-page {
    position: relative;
    display: block;
    width: 400px;
    height: 600px;
    background: #ccc;
    margin: auto;
    margin-top: 30px;
    .page1,.page2{
        width: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        background: #ffffff;
        height: 100%;
    }
    .page2{
        width: 0px;
        overflow: hidden;
        .content{
            float: right;
             position: relative;
            
        }
    }
}

.turn-page:hover .page2{
    background: red;
    width: 30px;
    
    overflow: hidden;
    cursor: pointer;

}

</style>

