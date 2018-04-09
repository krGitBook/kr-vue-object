class Router {
    constructor(){
        this.routers = {};
        this.currentUrl = '';
        this.$data = {}
    }
    router(path,callback){
        this.routers[path] = callback || function(){};
    }
    //试图发生变化
    updateView(url){
        this.currentUrl = url;
        this.getData();
        this.routes[this.currentUrl] && this.routes[this.currentUrl](this);
    }
    //
    init(){
        this.bindLink();
        window.addEventListener('popstate', e => {
            this.updateView(window.location.pathname);
        });
        window.addEventListener('load', () => this.updateView('/'), false);
    }
    //跳转监听
    link(){
        const allLink = document.querySelectorAll('a[data-href]');
        for(let i=0;i<allLink.length;i++){
            const current = allLink[i];
            current.addEventListener(
                'click',
                e => {
                    e.preventDefault();
                    const url = current.getAttribute('data-href');
                    history.pushState({}, null, url);
                    this.updateView(url);
                },
                false
            );
        }
    }
    getData(){
        let url = location.search; //获取url中"?"符后的字串
        let theRequest = new Object();
        if (url.indexOf("?") != -1) {
           let str = url.substr(1);
           strs = str.split("&");
           for(let i = 0; i < strs.length; i ++) {
              theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
           }
        }
        this.$data = Object.assign({},theRequest);
    }

}

export default Router;

//history做兼容