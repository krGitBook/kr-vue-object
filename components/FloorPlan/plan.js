

function init (go,content,overview) {
    if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this
    var $ = go.GraphObject.make;  // for conciseness in defining templates

    var myDiagram =
       $(go.Diagram, content,         
        {
            initialContentAlignment: go.Spot.Center,   
            "undoManager.isEnabled": true
        });
    
    function showMessage(s) {
        document.getElementById(overview).textContent = s;
    }
    
    myDiagram.addDiagramListener("ObjectSingleClicked",
        function(e) {
        var part = e.subject.part;
        if (!(part instanceof go.Link)) showMessage("Clicked on " + part.data.name);
    });
    
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
                ElementHover(node,true);
            },
            mouseLeave: function (e, node) { 
                ElementHover(node,false); 
            }
        }
    );
    
    //hover事件
    function ElementHover(node,show){
        if(show){
            showMessage("hover on " + node.data.name);
        }else{
            showMessage("");
        }
    }
    
    
    var myModel = $(go.Model);
    myModel.nodeDataArray =
    [ 
        { name: "未租", pos: "0 0", size:"50 50", color:"yellow"},
        { name: "在租", pos: "276 19", size:"100 100", color:"#499df1"},
        { name: "合同未生效", pos: "44 214", size:"100 50",color:"#ccc"},
        { name: "不可用", pos: "239 171", size:"50 100",color:"#000"}
    ];
    myDiagram.model = myModel;
    return {diagram:myDiagram};
}

export default init; 