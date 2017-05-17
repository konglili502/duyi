var webpack = require('webpack');
var providePlugin = new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery'});
var path = require('path'); //避免写__dirname

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.join(__dirname, 'static'),
        publicPath: 'http://localhost:3894/static/',
        filename: 'index.js'   //可以写成[name].js,这里只需要对一个文件进行打包，直接写成index.js就可以
    }, 
    module: {
        rules: [
            {test: /.less$/, use: ["style-loader", "css-loader", "less-loader"]},
            {test: /.js$/, loader: "babel-loader"},  //loader: "babel-loader"可换成use: ["babel-loader"]
            {test: /.(png|jpg)$/, loader: "url-loader"}
        ]
    },
    devServer: {
        port: 3894,
        historyApiFallback: true,
        inline: true  //浏览器同步代码
    },
    plugins: [providePlugin]
}
// "devDependencies": 指定项目开发所需要的模块
//dependencies:表示该项目运行所依赖的模块