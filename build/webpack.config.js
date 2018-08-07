const path = require('path');
const HappyPack = require('happypack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    mode: 'production', //development
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    test: /phaser|adapter/,
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: 'happypack/loader'
            }
        ]
    },
    resolve: {
        alias: {
            'phaser': path.resolve(__dirname, '../src/libs/phaser-wx.js'),
            'adapter': path.resolve(__dirname, '../src/libs/weapp-adapter.js'),
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
        ]),
        new HappyPack({
            loaders: [{
                loader:'babel-loader',
                options : {
                    cacheDirectory : true
                }
            }]
        })
    ],
    stats: {
        warnings: false
    }
}
