const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
    },
};

const javascript = {
    test: /\.(jsx|js)$/,
    exclude: /node_modules/,
    use: [
        {
            loader: 'babel-loader',
            options: {
                presets: ['es2015', 'react', 'stage-0', 'env'],
                plugins: ['transform-class-properties'],
            },
        },
    ],
};

const styles = {
    test: /\.(css)$/,
    use: ExtractTextPlugin.extract(['css-loader?sourceMap']),
};

const config = {
    entry: {
        App: './index.js',
    },
    resolve: {
        alias: {
            basedir: path.resolve(__dirname)
        },
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },

    module: {
        rules: [javascript, styles],
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
};

process.noDeprecation = true;

module.exports = config;
