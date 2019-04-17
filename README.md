# webpack4-demo 03 entry/output
当需要更改默认的 `webpack` 的配置的时候， 就需要新建一份 `webpack.config.js` 文件， 覆盖默认的 `webpack` 打包行为.

```js
module.exports = {
    entry: {},
    output: {}
}
```

> `webpack.config.js` 使用 `module.exports` 向外暴露一个对象， 这个对象中包含了 `webpack` 打包的各项配置. 

更改默认的  `entry` `output`

```js
const path = require('path')
module.exports = {
    entry: {
        app: './src/index.js'
    }, 
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: 'bundle.js'
    }
}
```
>注意
* 当 `entry` 只有一个入口的时候， 可以缩写为 `entry: './src/index.js'` 
* `output` 的路径需要是一个绝对路径， 所以需要使用 `path.resove()` 把 `__dirname`+ `dist` 拼接为绝对路径

## output.filename 中使用 `[name]`
在 `entry` 对象中， 对象的 `key` 可以在 `output.filename` 中使用 `[name]` 接收， 所以当 `entry` 中定义多个 `key` `value` 的时候， 打包后的文件可以使用 `[name].js` 来接受.

```js
{
    entry: {
        app: './src/demo01.js',
        vendor: './src/demo02.js'
    }, 
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: '[name].js'
    }
}
```

![](https://user-gold-cdn.xitu.io/2019/4/17/16a293b538450ce7?w=608&h=282&f=png&s=56456)

![](https://user-gold-cdn.xitu.io/2019/4/17/16a2932af48ee6e4?w=252&h=96&f=png&s=4492)


当在 `output.filename` 使用 `[name]` 时， 可以看到打包后的文件命是按照 `entry` 里面的 `key` 生成的。

当 `entry` 为一个的时候可以简写为 `entry: './src/index.js'` 这种写法是下面写法的简写

```js
entry: {
    main: './src/index.js'
}
```

这时在 `output.filename` 中使用 `[name]` 接收时， 打包后的文件名为 `main.js`










