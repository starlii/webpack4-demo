# webpack4-demo 01 安装与运行

## 安装 `webpack` 
由于 `webpack` 依赖于 `webpack-cli`，所以webpack 的运行需要安装两个 `npm` 包： `webpack` `webpack-cli`。

```bash
# 建议本地安装
npm install webpack webpack-cli --save-dev
```

## webpack 运行
`webpack4+` 版本号称 0 配置，那么在安装之后试着运行一下 `npx webpack`

> `npx` 是 `npm@5,2.0` 开始出现的 `npm 执行器`， 目的是省去在 `package.json` 中配置 `scripts`， 直接去执行在本地安装的可执行命令。  例如 ```npx webpack```

![](https://user-gold-cdn.xitu.io/2019/4/15/16a2025d78d408e2?w=1207&h=399&f=png&s=76189)

当执行 `npx webpack` 的时候， 发现会报错： `未找到 .src/ 的入口文件`， 这是因为在 `webpack@4` 以前， 运行 `webpack` 的命令必须要写一个配置文件， 并且在这个配置文件里面声明 1.打包的入口文件  2.打包后文件的放置位置。 而 `webpack@4+` 在没有配置文件的情况下， 会默认将 `src/index.js` 作为入口文件。

新增 `./src/index.js`后再次运行 `webpack` 命令.

```bash 
mkdir src

echo "console.log('text webpack entry ')" > src/index.js

npx webpack
```
可以看到， 在新建 `src/index.js` 之后， 运行 `webpack` 后的打包已经成功了。

![](https://user-gold-cdn.xitu.io/2019/4/15/16a20317793f337a?w=1188&h=310&f=png&s=59926)

打包后的文件默认将会放到在 `./dist/main.js`

![](https://user-gold-cdn.xitu.io/2019/4/15/16a2030f28885f13?w=231&h=292&f=png&s=21151)

> 可以发现当运行 `npx webpack` 后， 在打包成功后，出现了警告的文字， 这是在告诉我们要声明当前的打包环境是生产环境还是开发环境。 demo2 中将会分析这个。