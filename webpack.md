![](https://user-gold-cdn.xitu.io/2019/4/22/16a45a59af733873?w=2352&h=966&f=jpeg&s=109384)

webpack 用于编译 `javascript` 模块， 可以把文件格式编译成我们想要的静态文件格式， 但是处理的过程并不是全部由 `webpack` 本身完成， `webpack` 只是提供了一个打包机制， 对于各类文件的打包处理需要使用相对应的 预处理模块 `loader` 来处理， 作为一种机制 `webpack` 会帮助各种 `loader` 提供识别入口目录、入口文件、 输出目录， 输出文件。 

首先我们试着打包一个只包含 `console.log('hello world')` 的 `js` 文件。

```bash
#  新建 demo 目录
mkdir webpack-demo cd webpack-demo

# 初始化目录
npm init -y

# 本地安装 webpack 工具
npm install webpack webpacl-cli  --save-dev

# webpack 默认的入口文件是 .src/index.js   创建 src 目录和 index.js 文件
mkdir src

echo “console.log('hello world')” > src/index.js

# 执行 webpack 命令  需要查看打包后文件， 这里使用 development 模式 
npx webpack --mode development

```

由于打包后的文件比较繁琐， 这里我们简化一下打包后的文件

```js
(function(modules) {

})({
    "./src/index.js": (function(module, exports) {
                            eval("\nconsole.log('test webpack entry')\n\n\n//# sourceURL=webpack:///./src/index.js?");
                    })
})

```