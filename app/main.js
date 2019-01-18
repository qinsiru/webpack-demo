//主函数  先加载
const hello = require('./hello.js'); //CommonJS 的模块化引入 ，还有es6 cmd

//console.log(hello());会输出节点 h1
document.querySelector('#root').appendChild(hello());//把节点添加进去
