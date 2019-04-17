const path = require('path')
module.exports = {
    entry: {
        app: './src/demo01.js', 
        vendor: './src/demo02.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
}