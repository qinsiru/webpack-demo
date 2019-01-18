const app = require('./app');//默认就是JS文件 可以不写后缀  webpack 1 版本的需要全局安装 json-loader
const greet = require('./greet.json');//json 后缀不能省略


module.exports = ()=>{//模块化输出写法
    let helloEl = document.createElement('h1');
    //helloEl.textContent = 'Hello World!!!';
    helloEl.textContent = greet.greetText;
    
    //textContent=innerhtml
    return helloEl;//返回节点类型
}//duiwai 是一个函数

