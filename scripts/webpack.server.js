const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require("./webpack.base.js")
const {merge} = require('webpack-merge')
module.exports = merge(base, {
    target: 'node',
    entry: {
        server: path.resolve(__dirname, '../src/server-entry.js')
    },
    output: {
        libraryTarget: "commonjs2"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.ssr.html'),
            filename: "server.html",
            excludeChunks: ["server"],
            minify: false,
            client: '/client.bundle.js'
        }),
    ]
})
