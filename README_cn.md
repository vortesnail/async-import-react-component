<p align="center">
 <img width="100px" src="https://cdn.nlark.com/yuque/0/2020/png/341314/1598028307572-0d808194-8c87-4a36-88b9-eb3500c87832.png#align=left&display=inline&height=169&margin=%5Bobject%20Object%5D&name=logo.png&originHeight=1487&originWidth=1237&size=153699&status=done&style=none&width=141" align="center" alt="Async Import React Component" />
 <h2 align="center">Async Import React Component</h2>
 <p align="center">允许你异步地引入 React 组件!</p>
</p>
  <p align="center">
    <a href="https://github.com/vortesnail/async-import-react-component/actions">
      <img alt="Build And Test" src="https://img.shields.io/github/workflow/status/vortesnail/async-import-react-component/Build%20And%20Test?color=green&label=Build%20And%20Test&logo=github&style=flat-square"/>
    </a>
    <a href="https://codecov.io/gh/vortesnail/async-import-react-component">
      <img alt="Tests Passing" src="https://img.shields.io/codecov/c/github/vortesnail/async-import-react-component?color=green&logo=codecov&style=flat-square" />
    </a>
    <br />
  </p>

  <p align="center">
    <a href="README_cn.md">简体中文</a>
    ·
    <a href="README.md">English</a>
  </p>
</p>

## 这是什么?

这是一个简单的高阶函数，使用它能使你异步地加载 React 组件，这样在 webpack 打包时，引入的该组件会单独打成一个 chunk 文件，在使用到时才会去下载它，防止因为所有代码打进同一个 js 文件而带来的性能影响。

## 怎么使用?

### 安装

```bash
npm install async-import-react-component --save
```

### 使用

你可以通过以下两种方式去使用：第一为直接传入一个函数；第二为传入一个对象，这里面向外暴露了`4`个参数，你也可以将源码下载（或`fork`）之后进行自定义。

- **直接地**

```javascript
import getAsyncComponent from 'async-import-react-component'

const ComponentOne = getAsyncComponent(() => import('Components/ComponentOne'))
```

- **可选地**

```javascript
import getAsyncComponent from 'async-import-react-component'

const ComponentTwo = getAsyncComponent({
  resolve: () => import('Components/ComponentTwo'),
  loading: <div>ComponentTwo is loading...</div>,
  error: <div>An error has occurred, please check the component you import.</div>,
  delay: 1000,
})
```

## Options 配置

| 参数    | 说明                 | 类型                                | 默认值 |
| ------- | -------------------- | ----------------------------------- | ------ |
| resolve | 引入组件路径的函数   | Promise<{ default: ComponentType }> | -      |
| loading | 正在加载时的提示     | ReactNode                           | `null` |
| error   | 加载失败时的提示     | ReactNode                           | `null` |
| delay   | 设定延迟几秒开始加载 | number                              | `0`    |

## 需要帮助!

鉴于作者我本人对于书写单元测试能力不足，希望有志之士能共同参与这个小项目，贡献下优美的单元测试写法，我将不胜感激～ ❤️
