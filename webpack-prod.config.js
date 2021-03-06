const merge = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const dev = require('./webpack.config')

module.exports = merge(dev, {
    mode: "production",
    devtool: false,
    performance: {
        maxEntrypointSize: 900000,
        maxAssetSize: 900000
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ]
    }
});