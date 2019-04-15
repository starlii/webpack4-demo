# webpack4-demo 02 打包环境 mode 
在实际的开发过程中， 我们的项目需要有至少两个运行环境——开发环境和生产环境。 

在开发环境中: 需要一个微服务运行代码、热更新、 语法检查、设置跨域等。
在生产环境中: 需要代码压缩，代码拆分等。

`webpack@4` 版本引入了 `production` `development` 两种模式, 当运行 `webpack` 时如果没有制定打包过程使用那种模式， 将会给出警告。

![](https://user-gold-cdn.xitu.io/2019/4/15/16a20317793f337a?w=1188&h=310&f=png&s=59926)

因为只是警告，代码打包的过程当然是成功的，这时 `webpack` 将会默认当前运行模式为 `production`， 也就是打包后的代码是压缩过后的格式。

为了区别两种模式的区别我们可以指定运行模式来区别打包后文件的差别: 
```npx webpack --mode development```
当选择 `development` 模式时， 代码将会是未压缩状态.

![development mode](https://user-gold-cdn.xitu.io/2019/4/15/16a207dc258725f3?w=732&h=442&f=png&s=77232)

 ```npx webpack --mode production```
 当为 `production` 模式的时候，代码变成了压缩状态。
![production mode](https://user-gold-cdn.xitu.io/2019/4/15/16a207e557ae57e8?w=938&h=109&f=png&s=16783)

> production mode 可以开箱即用的进行各种优化， 不只是压缩， 还包括作用域提升， tree-shaking等.
> `webpack@4` 的配置虽然很便利， 但在开发过程中需要多种模式， 多种业务进行 `webpack` 的详细配置。
