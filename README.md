# webpack 

1.为了简化开发的复杂度 => 脚手架（Yeoman）,gulp,webpack;

2.Webpack 是 vue.js 御用的打包工具 => 模块化开发。

3.大多数企业, 使用gulp/grunt 架构项目。
    任务化 => 面向过程
main.Js 模块化 主函数是 程序入口 需要用什么模块就去加载
一开始就是通过主函数加载， 作为入口文件


4.Vue.js 开发观念为 => 组件化 => 提高代码复用性

webpack 构建本地服务器
1.首先全局安装：cnpm i webpack-dev-server -g
然后本地安装：cnpm i webpack-dev-server -D
2.配置本地服务器
 可以在 package.json配置： "serve":"webpack dev-server --open",
 然后npm run serve

