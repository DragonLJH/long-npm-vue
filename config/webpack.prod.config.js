const path = require("path");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js'); // 引用公共的配置
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const prodConfig = {
    mode: "production",
    entry: path.join(__dirname, "../src/components/index.ts"),
    plugins: [
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "main.min.css" // 提取后的css的文件名
        })
    ],
    output: {
        path: path.join(__dirname, "../lib/"),
        filename: "index.js",
        library:"index",
        libraryTarget: 'umd', // 采用通用模块定义
        libraryExport: 'default', // 兼容 ES6 的模块系统、CommonJS 和 AMD 模块规范
    },
    // 外部扩展(Externals)
    // 定义外部依赖，避免把vue打包进去
    externals: {
        vue: {
            root: "Vue",
            commonjs2: "vue",
            commonjs: "vue",
            amd: "vue"
        },
        "vue-router": {
            root: "vue-router",
            commonjs2: "vue-router",
            commonjs: "vue-router",
            amd: "vue-router"
        }
    }
}

module.exports = merge(prodConfig, baseConfig); // 将baseConfig和prodConfig合并为一个配置