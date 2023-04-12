const path = require("path");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { DefinePlugin } = require("webpack")

module.exports = {
    resolve: {
        extensions: ['.vue', '.ts', '.js'],
        alias: {
            "@": path.join(__dirname, "../src")
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
                use: "file-loader"
                    // type: "asset/resource"
            },
            {
                test: /\.([cm]?ts|tsx)$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                }
            },
        ]
    },
    plugins: [
        new DefinePlugin({ __VUE_OPTIONS_API__: "true", __VUE_PROD_DEVTOOLS__: "false" }),
        new VueLoaderPlugin(),
    ],
}