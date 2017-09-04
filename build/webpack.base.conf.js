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
            // index: path.join(__dirname + '/../src/index.js')
            index: ["babel-polyfill", path.join(__dirname + '/../src/index.js')] // 解决IE不兼容【IE报vuex requires a Promise polyfill in this browser问题解决】
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