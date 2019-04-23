![](https://user-gold-cdn.xitu.io/2019/4/22/16a45a59af733873?w=2352&h=966&f=jpeg&s=109384)

webpack 用于编译 `javascript` 模块， 可以把文件格式编译成我们想要的静态文件格式， 但是处理的过程并不是全部由 `webpack` 本身完成， `webpack` 只是提供了一个打包机制， 对于各类文件的打包处理需要使用相对应的 预处理模块 `loader` 来处理， 作为一种机制 `webpack` 会帮助各种 `loader` 提供识别入口目录、入口文件、 输出目录， 输出文件。 

首先我们试着打包一个只包含 `console.log('hello world')` 的 `js` 文件。

## 初始化文件和安装 `webpack` 环境

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

## 简化打包后文件
由于打包后的文件比较繁琐， 这里我们简化一下打包后的文件

```js
(function(modules) {
    var installedModules = {}
    function __webpack_require__(moduleIid) {

    }
    return __webpack_require__(__webpack_require__.s = "./src/index.js")
})({
    "./src/index.js": (function(module, exports) {
                            eval("console.log('test webpack entry')");
                    })
})

```
从上面的代码可以看到， 
1. 经过 `webpack` 打包后的代码通过一个 `IIFE` 自执行函数， 这个函数接收一个对象参数， 这个对象的 `key` 为入口文件的目录， `value`  是一个执行入口文件里面代码的函数
2. 这个对象作为参数 `modules` 传递给 `IIFE` 函数
3. `IIFE` 函数里面声明了一个变量 `installedModules` 用来存放缓存，  一个函数 `__webpack_require__`， 用来转化入口文件里面的代码
4. `IIFE` 最终把 `modules` 里面的的 `key` 传递给 `__webpack_require__` 函数并返回。

 我们进一步看 `__webpack_require__` 函数都做了什么。

## `__webpack_require__` 分析

```js 
function (modules) {
    var installedModules = {}

    function __webpack_require__ (moduleId) {
        if(installedModules[moduleId]) {
            return installedModules[moduleId].exports
        }

        var module = installedModules[moduleId] = {
            i: moduleId,
            l:false,
            exports: {}
        }

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)

        module.l = true

        return module.exports
    }
}

```

1. `__webpack_require__` 函数接收 `./src/index.js`
2. 首先检查缓存 `installedModules` 中是否包含 `key` 为 `./src/index.js` 的对象， 如果存在直接返回这个对象中的 `exports`
3. 当缓存中不存在入口模块的时候， 在缓存中生成一个对象并放到缓存中， 这个对象包括三个值： `i` `l` `exports`
4. 使用 `modules[moduleId].call` 调用 `IIFE` 参数的 `value` 函数， 并把 `value` 对应的函数中的 `this` 指向赋值给了 `module.exports`, 后面的 `call` 方法的后面三个参数为 `value` 对应函数的参数
5. 最后返回了 `module.exports`， 这里的 `module.exports` 在第四步的时候已赋值为 `IIFE` 参数对象中的 `value` 对应的函数。 

所以可以看出来。 函数 `__webpack_require__`  实际返回的就是 `IIFE` 参数对象中的 `value` 对应的函数， 也就是 `eval("\nconsole.log('test webpack entry')\n\n\n//# sourceURL=webpack:///./src/index.js?")`， 

当我们运行 `webpack` 打包后的文件的时候执行的是 `"console.log('test webpack entry')"`

## 入口文件引用其他模块时的打包过程
上面讲的打包过程入口文件中并没有引用其他的代码模块， 当入口文件中引用其他的模块的时候， `webpack` 的打包过程也和上述过程相似。

在 `./src/` 下新建 `main.js`
```js
module.exports = () => {
    console.log('main module')
}
```

在 `./src/index.js` 中引入 `main.js`

```js
const main = reuiqre('./main.js')
console.log('webpack index entry')
main()
    
```






