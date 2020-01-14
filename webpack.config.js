const path = require('path');

module.exports = {
    mode: 'development',
    context: __dirname + '/src',
    entry: './index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/index.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
    },
    module: {
        rules: [
            { test: /\.ts$/, loader:'ts-loader' }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    }
};