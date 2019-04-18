# webpack4-demo 04 loader 
 `webpack` 的作用是将各种格式的文件打包成为 `js` 文件， 但是 `webpack` 本身带有打包的功能， 文件的转换需要借助于不同的 `loader` 来完成。

`loader` 用于对模块的源代码进行转换,  当在代码中引用或者加载模块的时候， 可以使用 `loader` 进行预处理。 在预处理中, 不同的文件使用对应的 `xxx-loader` 最终转换成 `js`。

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
为了兼容浏览器对 `es6` 语法的支持， 我们需要 `babel-loader` 对代码进行预转译处理，转译为旧版浏览器支持的语法.
```bash
npm install babel-loader --save-dev
```

然后添加针对 `js` 的 `loader` 配置

```js
module: {
    rules: [
        {
            test: /\.js$/,
            use: 'babel-loader'
        }
    ]
}

```
运行 `npx webpack` 再次打包项目

![](https://user-gold-cdn.xitu.io/2019/4/18/16a2fd83c5606e68?w=804&h=326&f=png&s=55149)

将会报以上的错误， 是因为 `babel-loader` 依赖于 `@babel/core`, 所以还要安装 `@babel/core` 来支持 `babel-loader`

```js
npm install @babel/core --save-dev
```

这时再次运行 `npx webpack` 运行成功.

![](https://user-gold-cdn.xitu.io/2019/4/18/16a2fdeb561d4822?w=550&h=349&f=png&s=23524)





