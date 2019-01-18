//配置文件 一般放在根目录下
//让webpack 自动拿到这个对象
module.exports = {
    //entry入口  当前项目的根目录（ 双下划线dirname )它不包括斜杠 入口文件只一个，输出文件有多个 即为对象
    entry:__dirname + '/app/main.js',
    output:{
        path:__dirname + '/public/',
        filename:'bundle.js'
    },//因为会有很多未知参数设置，输出一般是对象
//配置本地服务器
    devServer:{
        port:9000,//端口号 默认是8080
        contentBase:__dirname + '/public',//本地服务器所加载的页面所在目录
        inline:true ,//实时更新 
        historyApiFallback:true //不跳转 只会更新渲染 最好加上 开发单页面框架时
    }
}