const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }, 
    module: {
        rules: [
           {
            test: /\.js$/,
            use: 'babel-loader'
           }
        ]
    }, 
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}