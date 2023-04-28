const base = {
    get() {
        return {
            url : "http://localhost:8080/nodejs90h64/",
            name: "nodejs90h64",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/nodejs90h64/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "宠物用品购物网站"
        } 
    }
}
export default base
