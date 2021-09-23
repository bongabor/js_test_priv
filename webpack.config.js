const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    module:{
        rules:[
            { test:/\.js$/, exclude: /node_modules/, use: "babel-loader"},
            { test:/\.html$/, use:{
                loader: "html-loader",
                options: {minimize:true}
            }},
            { test:/\/scss$/, use: [
                {loader: "style-loader"},
                {loader:  "css-loader"},
                {loader:  "sass-loader"} 
            ]},
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
};