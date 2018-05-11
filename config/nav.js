export default function (parameter) {
    let { iconSize } = parameter;
    return [
        {
            
            label: 'pdf展示组件',
            toPath: '/demo/vuePdf',
            iconSize:iconSize||24,
            iconType:'ios-navigate'
        },
        {
            label: '锁定英文输入法的input',
            toPath: '/demo/englishInput',
            iconSize: iconSize || 24,
            iconType: 'ios-navigate'
        },
        {
            label: '加载动画',
            toPath: '/demo/spin',
            iconSize: iconSize || 24,
            iconType: 'ios-navigate'
        },
        {
            label: '无限滚动',
            toPath: '/demo/infiniteScroll',
            iconSize: iconSize || 24,
            iconType: 'ios-navigate'
        },
        {
            label: '流程图',
            toPath: '/demo/flowChart',
            iconSize: iconSize || 24,
            iconType: 'ios-navigate'
        },
        {
            label: '平面图',
            toPath: '/demo/floorPlan',
            iconSize: iconSize || 24,
            iconType: 'ios-navigate'
        },
        {
            label: '进度预览',
            toPath: '/demo/progress',
            iconSize: iconSize || 24,
            iconType: 'ios-navigate'
        },
        {
            label: '页面关键字搜索',
            toPath: '/demo/searchToLocation',
            iconSize: iconSize || 24,
            iconType: 'ios-navigate'
        },
        {
            label: '树状图',
            toPath: '/demo/tree',
            iconSize: iconSize || 24,
            iconType: 'ios-navigate'
        },
        {
            label: 'tortip',
            toPath: '/demo/fixedTirTop',
            iconSize: iconSize || 24,
            iconType: 'ios-navigate'
        },
        {
            label: '图片组件',
            toPath: '/demo/krImg',
            iconSize: iconSize || 24,
            iconType: 'ios-navigate'
        },
        {
            label: '翻页效果',
            toPath: '/demo/TurnPage',
            iconSize: iconSize || 24,
            iconType: 'ios-navigate'
        },
    ];

}
    
