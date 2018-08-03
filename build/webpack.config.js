const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'main.js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'phaser': path.resolve(__dirname, '../src/libs/phaser-wx.js'),
            'assets': path.resolve(__dirname, '../src/assets/')
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist'],{
            root: path.resolve(__dirname, '../'),
            exclude: ['game.js','game.json']
        }),
        new CopyWebpackPlugin([
            {from:'./src/game.js',to:'game.js'},
            {from:'./src/game.json',to:'game.json'},
            {from:'./src/assets',to:'assets'}
        ])
    ]
}
