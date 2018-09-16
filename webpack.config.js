const path = require("path");
const fs = require("fs");
const webpack = require("webpack");

module.exports = {
    entry: {
        app: `./app/browser.js`, //需要打包的文件
        css:'./app/css.scss'
    },
    target: 'node',
    output: {
        path: path.resolve(__dirname),
        // filename: (entry)=>{
        //     if(entry.chunk.name === 'app'){
        //         return `${entry.chunk.name}.js`
        //     }else{
        //         return `${entry.chunk.name}.css`
        //     }
        //
        // }
        filename: '[name].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude:/node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss?$/,
                exclude:/node_modules/,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
            }
        ]
    },
}
