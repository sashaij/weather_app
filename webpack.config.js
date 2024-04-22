const path = require('path');
const { RuntimeGlobals } = require('webpack');
const HtmlWebpackPllugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPllugin ({
            title: 'Weather App',
            filename: 'index.html',
            template: './src/template.html'
        }),
    ],
}