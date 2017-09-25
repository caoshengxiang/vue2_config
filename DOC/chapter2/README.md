# 二章 webpack配置

### ps:

对项目没有特殊要求，或者对webpack 不是很熟练，推荐使用vue-cli 构建项目。vue-cli项目的构建非常简单。

`npm install -g vue-cli`

`vue init <template-name> <project-name>` 例如：`vue init webpack my-project`

[详细使用可查阅官网](https://www.npmjs.com/package/vue-cli)

### node 和  npm

首先需要安装node环境，官方下载地址[http://nodejs.cn/download/](http://nodejs.cn/download/) ，建议下载长期稳定版，@5到@6

根据系统下载node，安装node后npm会随node一并安装，【具体安装步骤不做介绍，只说重点】

window下载msi，直接点击安装即可。

linux下node可通过 `n` 版本管理，可安装多个版本的node，这是一个非常好的工具，通过 npm install -g n 即可安装, 官方链接[点击这里](https://www.npmjs.com/package/n)

### package.json

项目依赖管理文件, 内容如下：

```json
{
  "name": "editor",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --env=dev --progress --hot --colors",
    "build": "webpack --env=prod --progress --colors",
    "release": "rm -rf dist/* && npm run build && ./bash/compress.sh"
  },
  "author": "",
  "license": "ISC",
  "repository": "",
  "devDependencies": {
    "@kazupon/vue-i18n-loader": "^0.2.0",
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.25.0",
    "babel-eslint": "^7.2.3",
    "babel-loader": "^7.1.1",
    "babel-plugin-istanbul": "^4.1.4",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.6.0",
    "babel-preset-stage-2": "^6.24.1",
    "babel-register": "^6.24.1",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.28.4",
    "eslint": "^4.4.1",
    "eslint-config-standard": "^10.2.1",
    "eslint-friendly-formatter": "^3.0.0",
    "eslint-loader": "^1.9.0",
    "eslint-plugin-html": "^3.2.0",
    "eslint-plugin-import": "^2.7.0",
    "eslint-plugin-node": "^5.1.1",
    "eslint-plugin-promise": "^3.5.0",
    "eslint-plugin-standard": "^3.0.1",
    "extract-text-webpack-plugin": "^3.0.0",
    "file-loader": "^0.11.2",
    "friendly-errors-webpack-plugin": "^1.6.1",
    "html-webpack-plugin": "^2.30.1",
    "less": "^2.7.2",
    "less-loader": "^4.0.5",
    "minimist": "^1.2.0",
    "node-sass": "^4.5.3",
    "open-browser-webpack-plugin": "0.0.5",
    "optimize-css-assets-webpack-plugin": "^3.0.0",
    "postcss-loader": "^2.0.6",
    "sass-loader": "^6.0.6",
    "style-loader": "^0.18.2",
    "url-loader": "^0.5.9",
    "vue-hot-reload-api": "^2.1.0",
    "vue-i18n": "^7.1.1",
    "vue-loader": "^13.0.4",
    "vue-style-loader": "^3.0.1",
    "vue-template-compiler": "^2.4.2",
    "webpack": "^3.5.4",
    "webpack-dev-server": "^2.7.1",
    "webpack-merge": "^4.1.0"
  },
  "dependencies": {
    "axios": "^0.16.2",
    "jquery": "^3.2.1",
    "vue": "^2.4.2",
    "vue-router": "^2.7.0",
    "vuex": "^2.3.1"
  }
}
```

讲解最重要的两个地方

1. script

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --env=dev --progress --hot --colors",
    "build": "webpack --env=prod --progress --colors",
    "release": "rm -rf dist/* && npm run build && ./bash/compress.sh"
  },
```

这里最主要包含三个命令：

`npm run dev`    项目开发环境的运行命令

`npm run build` 项目打包命令

`npm run relesse` 项目部署命令，结合一些脚本使用，一键部署到服务器。涉及很多服务器配置，不详解，本地开发只需上面两个命令即可。

1. dependencies 和 devDependencies

包含整个项目的依赖包，意思分别是生产依赖和开发依赖，这里可了解到项目的依赖，以及个依赖版本信息

### webpack

1. webpack 配置文件

根目录： `webpack.config.js`

build目录:

```
config.js  // 包含webpack配置中的常量定义
webpack.base.conf.js // webapck 基本配置
webpack.dev.conf.js  // webpack 开发环境配置
webpack.prod.conf.js // webpack 生产环境配置
```

在运行`npm run ***`   命令是将传入环境参数 如：`--env=dev` 和 `--env=prod`  ,`webpack.config.js`根据参数调用对应环境的配置文件

#### webpack.config.js 如下：

```js
/**
 * Created by allen on 17-4-26.
 */
var minimist = require('minimist'); // 参数解析工具

var args = minimist(process.argv.slice(2));

function buildConfig(env) {

    console.log('>>>>>>>>>>环境>>>>>>>>>>')
    console.log('>>                    >>')
    console.log('>>                    >>')
    console.log('>>                    >>')
    console.log('>>                    >>')
    console.log('>>       '+env+'         >>')
    console.log('>>                    >>')
    console.log('>>                    >>')
    console.log('>>                    >>')
    console.log('>>>>>>>>>>环境>>>>>>>>>>')



    return require('./build/webpack.' + env + '.conf.js')({ env: env })
}


module.exports = buildConfig(args.env);
```

使用到minimist这个模块，作用是解析 `npm run **`传递上来的参数；

minimist安装： cd 项目根目录`npm install minimist`

#### webpack.base.conf.js 如下：

```js
/**
 * Created by allen on 17-4-27.
 */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// 自动添加厂商前缀
var autoprefixer = require('autoprefixer');

// 这是一个Webpack插件，可以将单个文件或整个目录复制到构建目录中。
var CopyWebpackPlugin = require('copy-webpack-plugin')

var path = require('path')
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}


module.exports = function (env) {
    return {
        // context: __dirname + '../src',
        entry: { // 入口
            index: path.join(__dirname + '/../src/index.js')
        },
        output: { // 出口
            path: path.join(__dirname, '/../dist'),
            filename: 'js/[name].min.js',
            chunkFilename: 'js/[name].min.js?[hash]', // chunkFilename用来打包require.ensure方法中引入的模块,如果该方法中没有引入任何模块则不会生成任何chunk块文件(hash可避免缓存)
            publicPath: env.env==='dev'?'':'./', // webpack-dev-server 伺服的文件是相对 publicPath 这个路径的, 在 index.html 文件当中引入的路径也发生相应的变化: 如：<script src="assets/index.js"></script>
        },
        resolve: {
            //设置可省略文件后缀名(注:如果有文件没有后缀设置''会在编译时会报错,必须改成' '中间加个空格。ps:虽然看起来很强大但有时候省略后缀真不知道加载是啥啊~);
            extensions: [' ', '.js', '.css', '.sass', '.scss', '.vue', '.less', '.json'],

            //查找module的话从这里开始查找;
            modules: [path.join(__dirname, '/../src'), 'node_modules'],

            // 别名设置,主要是为了配和webpack.ProvidePlugin设置全局插件;
            // 为了方便开发，我们可以定义自己的别名，以便很快捷地引用不同的模块
            alias: {
                // vue: 'vue/dist/vue.js',
                // jquery: path.resolve(__dirname,'./src/j/jquery.min.js') //绝对路径;
            },

        },
        module: {
            rules: [
                // eslint
                {
                    test: /\.(js|vue)$/,
                    enforce: 'pre',
                    include: [resolve('src'), resolve('test')],
                    use: [{
                        loader: 'eslint-loader',
                        options: {
                            formatter: require('eslint-friendly-formatter')
                        }
                    }],
                    // exclude: /node_modules/, // 可以不用定义这个字段的属性值，eslint会自动忽略node_modules和bower_
                },

                // 解析js文件，用babel编译es6
                {
                    test: /\.js/,
                    use: ["babel-loader"],
                    exclude: /node_modules/,
                    include: [path.resolve(__dirname, '../src/')]
                },

                // 解析.vue文件
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: { // vue文件中sass、less等
                        loaders: {
                            js: 'babel-loader',
                            css: "vue-style-loader!css-loader!postcss-loader",
                            less: "vue-style-loader!css-loader!postcss-loader!less-loader",
                            sass: "vue-style-loader!css-loader!postcss-loader!sass-loader",
                            scss: 'vue-style-loader!css-loader!postcss-loader!sass-loader',
                            i18n: '@kazupon/vue-i18n-loader'
                        }
                    }
                },
                // css
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: ['css-loader','postcss-loader']
                    })
                },

                // css/less 使用postcss-loader自动添加厂商前缀
                {
                    test: /\.(less)$/,
                    use: ExtractTextPlugin.extract({ // 打包css
                        fallback: 'style-loader',
                        use: ['css-loader','postcss-loader', 'less-loader']
                    })
                },
                // css/sass 使用postcss-loader自动添加厂商前缀
                {
                    test: /\.(sass|scss)$/,
                    use: ExtractTextPlugin.extract({ // 打包css
                        fallback: 'style-loader',
                        use: ['css-loader','postcss-loader', 'sass-loader']
                    })
                },
                // 图片
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 10000,
                                name: 'img/[name].[hash:7].[ext]'
                            }
                        }
                    ]
                },
                //字体
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 10000,
                                name: 'fonts/[name].[md5:hash:hex:7].[ext]'
                            }
                        }
                    ]
                },
                // 视频
                {
                    test: /\.mp4$/,
                    use: ['file-loader'],
                }
            ]
        },
        plugins: [
            /* 全局使用 */
            /* 所有$都会加载对应的jquery模块，其他同 */
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                $axios: 'axios'
            }),
            new webpack.LoaderOptionsPlugin({ //浏览器加前缀
                options: {
                    postcss: [require('autoprefixer')({browsers:['last 5 versions']})]
                }
            }),
            // 复制静态目录
            new CopyWebpackPlugin([
                {
                    from: path.resolve(__dirname, '../static'),
                    to: 'static',
                    ignore: ['.*']
                }
            ])
        ],
    }
}
```

#### webpack.dev.conf.js 如下：

```js
/**
 * Created by allen on 17-4-27.
 */

var webpackMerge = require('webpack-merge');
var webpack = require('webpack');
var path = require('path');
// 生成html
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// 启动服务器时打开浏览器插件
var OpenBrowserPlugin = require('open-browser-webpack-plugin');//打开浏览器

var baseConfig = require('./webpack.base.conf.js');
var config = require('./config')

module.exports = function (env) {
    return webpackMerge(baseConfig(env), {
        devtool: 'cheap-module-source-map',

        /* server */
        devServer: {    // 设置本地Server;
            contentBase: config.dev.contentBase,  // 设置启动文件目录;
            host: config.dev.host, // 主机或IP
            port: config.dev.port,      // 设置端口号；
            compress: true, // 设置gzip压缩;
            inline: true,  // 开启更新客户端入口(可在package.json scripts 里设置 npm run xxx);
            // ？？？？ hot 设在这里npm run dev 是空白页面,网上有建议写在package.json
            // hot: true,    // 设置热更新(可在package.json scripts 里设置 npm run xxx);
            // open: true, // 打开浏览器 ???? 好像是安装包出现问题自动打开后路径出现undefiled,OpenBrowserPlugin打开
            proxy: config.dev.proxyTable, // 设置代理服务器
        },


        plugins: [
            // 使用Webpack的DefinePlugin来指示生产环境,生产模式将由process.env.NODE_ENVVue的源代码确定，默认情况下将处于开发模式。
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('development')
                }
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new FriendlyErrorsPlugin(),

            /*编译生成html代码并在html中插入<script>标签*/
            new HtmlWebpackPlugin({
                favicon: path.join(__dirname, '../src/favicon.ico'), // icon
                filename: path.resolve(__dirname + '/../dist/index.html'),   // 目标文件
                template: path.resolve(__dirname + '/../src/index.html'), //模板文件
                inject: 'body', // 要把script插入到标签里
                // hash: true,  //代表js文件后面会跟一个随机字符串,解决缓存问题
                // chunks: ["index"], // chunks这个参数告诉插件要引用entry里面的哪几个入口
            }),

            //提取出来的样式放在style.css文件中
            new ExtractTextPlugin({
                filename: 'css/styles.css',
                disable: false,
                allChunks: true
            }),

            // 浏览器打开地址
            new OpenBrowserPlugin({
                url: 'http://'+ config.dev.host +':'+config.dev.port
            }),
        ]
    })
}
```

#### webpack.prod.conf.js 如下：



```js
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
            }
```

####

#### config.js 如下：

```
/**
 * Created by allen on 17-7-4.
 */
var path = require('path');
module.exports = {
    dev: {
        // host: '192.168.1.127',  // 主机或IP
        host: 'localhost',  // 主机或IP
        port: 8800, // 设置端口号
        assetsPublicPath: '',
        contentBase: path.join(__dirname, '/../dist'),
        proxyTable: { // 设置代理服务器
            '/api': {
                target: 'http://47.95.6.138:8080',
                secure: false
            },
            '/i': {
                target: 'http://image.baidu.com',
                secure: false
            },
            '/search': {
                target: 'http://image.baidu.com',
                secure: false
            }
        }
    },
    build: {

    }

}
```



配置文件中的注释都很丰富，所以暂不做详解，后期完善。

webpack 官网地址： [http://webpack.github.io/](http://webpack.github.io/) 可在这里查看





















