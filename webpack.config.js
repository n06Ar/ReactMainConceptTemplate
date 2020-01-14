const path = require('path');

module.exports = {
    mode: 'development',
    context: __dirname + '/src',
    entry: './index.tsx',
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
            { test: /\.tsx?$/, loader:'ts-loader' }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    }
};