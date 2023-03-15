const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: ["url-loader"]
                // type: "asset/resource"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 以 public/index.html 为模板创建文件
            // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
            template: path.resolve(__dirname, "public/index.html"),
        }),
    ],
    output: {
        filename: "index_bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devServer: {
        host: "localhost", // 启动服务器域名
        port: "3000", // 启动服务器端口号
        open: true, // 是否自动打开浏览器
    },
    // 模式 开发模式：development 生产模式：production
    mode: "development",
}



