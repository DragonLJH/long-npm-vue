const path = require("path");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { DefinePlugin } = require("webpack")

module.exports = (env) => {
    return {
        mode: env.NODE_ENV,
        entry: {
            index: "./src/index.ts",
        },
        resolve: {
            extensions: ['.vue', '.ts', '.js'],
            alias: {
                "@": path.join(__dirname, "./src")
            }
        },
        devtool: 'inline-source-map',
        module: {
            rules: [{
                test: /\.vue$/i,
                use: "vue-loader"
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: "url-loader"
                // type: "asset/resource"
            },
            {
                test: /\.([cm]?ts|tsx)$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                }
                // options: {
                //     reportFiles: [
                //         'src/**/*.{ts,tsx}'
                //     ]
                // },
                // exclude: /node_modules/
            },
            ]
        },
        plugins: [
            new DefinePlugin({ __VUE_OPTIONS_API__: "true", __VUE_PROD_DEVTOOLS__: "false" }),
            new VueLoaderPlugin(),
            // new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                // title: 'Development',
                // 以 public/index.html 为模板创建文件
                // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
                template: path.resolve(__dirname, "public/index.html"),
            }),
        ],
        output: {
            filename: "js/[name].[contenthash:8].js",
            path: path.resolve(__dirname, "dist"),
            clean: true,
        },
        devServer: {
            host: "localhost", // 启动服务器域名
            port: "3000", // 启动服务器端口号 
        },
        // entry 多个入口文件 需添加，否则实时重新加载失败  
        // optimization: {
        //     runtimeChunk: 'single',
        // },
    }
}