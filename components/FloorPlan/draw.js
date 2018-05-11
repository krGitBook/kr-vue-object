

function draw (go,content,data,clickFn,enterFn,leaveFn) {
    if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this
    var $ = go.GraphObject.make;  // for conciseness in defining templates

    var myDiagram =
       $(go.Diagram, content,         
        {
            initialContentAlignment: go.Spot.Center,   
            "undoManager.isEnabled": true
        });
    
    // function showMessage(s) {
    //     // document.getElementById(overview).textContent = s;
    // }
    
    myDiagram.addDiagramListener("ObjectSingleClicked",
        function(e) {
        var data = Object.assign({},e)

        // var part = e.subject.part;
        clickFn(data)
        // if (!(part instanceof go.Link)) showMessage("Clicked on " + part.data.name);
    });
    //绘制
    myDiagram.nodeTemplate =
        $(go.Node, "Auto",
        $(go.Shape, "RoundedRectangle",
        //元素填充背景色
        new go.Binding("fill","color")),
        //元素尺寸
        new go.Binding("desiredSize", "size", go.Size.parse),
        //元素位置
        new go.Binding("position", "pos", go.Point.parse).makeTwoWay(go.Point.stringify),
        $(go.TextBlock,
        { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
        new go.Binding("text", "name")),
        { //鼠标事件
            mouseEnter: function (e, node) { 
                enterFn(e,node)
                // ElementHover(node,true);
            },
            mouseLeave: function (e, node) { 
                leaveFn(e,node)
            }
        }
    );
    
    
    
    var myModel = $(go.Model);
    myModel.nodeDataArray =[].concat(data)
    
    myDiagram.model = myModel;
    return {diagram:myDiagram};
}

export default draw; 