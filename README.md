# webpack4-demo 04 loader 
 `webpack` 可以将各种格式的文件打包成为 `js` 文件， 但是 `webpack` 本身只能打包文件， 文件的转换需要借助于不同的的 `loader`。

`loader` 用于对模块的源代码进行转换,  当在代码中引用或者加载模块的时候， 可以使用 `loader` 进行预处理。 在于处理中, 不同的文件使用对应的 `xxx-loader` 可以将不同的语言和格式转换成 `js`

`loader` 在 `webpack.config.js` 中的使用如下

```js
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/, //匹配文件
                exclude: /nodes_modules/, // 在匹配到的 集合中排除一些文件
                use: 'xxx-loader' // 制定使用的 loader
            }
        ]
    }
}
```

## 对 `js` 进行 loader 处理
为了兼容浏览器对 `es6` 语法的支持， 我们需要某种 `loader` 对代码进行预转译处理，转译为旧版浏览器支持的语法.












