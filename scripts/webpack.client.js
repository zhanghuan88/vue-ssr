const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require("./webpack.base.js")
const {merge} = require('webpack-merge')
module.exports = merge(base, {
    entry: {
        client: path.resolve(__dirname, '../src/client-entry.js')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: "client.html",
        }),
    ]
})
