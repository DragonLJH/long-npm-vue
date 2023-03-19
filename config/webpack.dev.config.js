const path = require("path");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js'); // 引用公共的配置
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
    mode: "development",
    entry:  path.join(__dirname, "../src/index.ts"),
    plugins: [
        new HtmlWebpackPlugin({
            // title: 'Development',
            // 以 public/index.html 为模板创建文件
            // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
            template: path.resolve(__dirname, "../public/index.html"),
        }),
    ],
    output: {
        filename: "js/bundle.js", // 使用webpack-dev-sevrer启动开发服务时，并不会实际在`src`目录下生成bundle.js，打包好的文件是在内存中的，但并不影响我们使用。
        path: path.resolve(__dirname, "../dist"),
        clean: true,

    },
    devServer: {
        compress: true,
        host: '127.0.0.1', // webpack-dev-server启动时要指定ip，不能直接通过localhost启动，不指定会报错
        port: 3001, // 启动端口为 3001 的服务
        open: false // 自动打开浏览器
    },
    // entry 多个入口文件 需添加，否则实时重新加载失败  
    // optimization: {
    //     runtimeChunk: 'single',
    // },
}

module.exports = merge(devConfig, baseConfig); // 将baseConfig和devConfig合并为一个配置