const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "eval-source-map",
    entry: "./index.web.js",
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        filename: 'bundle.min.js',
        path: path.join(__dirname, "/dist")
    },
    module: {
        rules:[{
            test: /\.(tsx|jsx|js|ts)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env', "@babel/typescript", '@babel/preset-react'],
                    plugins: [
                        ["@babel/plugin-proposal-decorators", { "legacy" : true}],
                        ["@babel/plugin-proposal-class-properties", {"loose" : true}]
                    ]
                }
            },
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./index.html"
        }),
    ]
}