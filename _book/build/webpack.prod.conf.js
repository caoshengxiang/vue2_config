/**
 * Created by allen on 17-4-27.
 */

var webpackMerge = require('webpack-merge');　// 合并配置文件
var webpack = require('webpack');
var path = require('path');
var baseConfig = require('./webpack.base.conf.js');

// 压缩CSS模块;
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// 生成html
var HtmlWebpackPlugin = require('html-webpack-plugin');

// css样式从js文件中分离出来,需要通过命令行安装 extract-text-webpack-plugin依赖包
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = function (env) {
    return webpackMerge(baseConfig(env), {
        plugins: [
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),

            // webpack内置js压缩插件;
            new webpack.optimize.UglifyJsPlugin({
                compress: {                               //压缩;
                    warnings: false                      //关闭警告;
                }
            }),

            // 使用Webpack的DefinePlugin来指示生产环境,生产模式将由process.env.NODE_ENVVue的源代码确定，默认情况下将处于开发模式。
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),

            //提取出来的样式放在style.css文件中
            new ExtractTextPlugin({
                filename: 'css/styles.css',
                    disable: false,
                    allChunks: true
            }),

            /* 压缩css（注:因为没有用style-loader打包到js里所以webpack.optimize.UglifyJsPlugin的压缩本身对独立css不管用）;*/
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,                //正则匹配后缀.css文件;
                cssProcessor: require('cssnano'),            //加载‘cssnano’css优化插件;
                cssProcessorOptions: {discardComments: {removeAll: true}}, //插件设置,删除所有注释;
                canPrint: true                             //设置是否可以向控制台打日志,默认为true;
            }),

            /*编译生成html代码并在html中插入<script>标签*/
            new HtmlWebpackPlugin({
                favicon: path.join(__dirname, '../src/favicon.ico'),
                filename: path.resolve(__dirname + '/../dist/index.html'),   // 目标文件
                template: path.resolve(__dirname + '/../src/index.html'), //模板文件
                inject: 'body', // 要把script插入到标签里
                hash: true,  //代表js文件后面会跟一个随机字符串,解决缓存问题
                chunks: ["index"], // chunks这个参数告诉插件要引用entry里面的哪几个入口
                minify: { //压缩HTML文件
                    removeComments: true, //移除HTML中的注释
                    collapseWhitespace: true, //删除空白符与换行符
                    removeAttributeQuotes: true,
                },
                // necessary to consistently work with multiple chunks via CommonsChunkPlugin
                // chunksSortMode: 'dependency'
            }),

        ],
    })
}