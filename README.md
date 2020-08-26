<p align="center">
 <img width="100px" src="https://cdn.nlark.com/yuque/0/2020/png/341314/1598028307572-0d808194-8c87-4a36-88b9-eb3500c87832.png#align=left&display=inline&height=169&margin=%5Bobject%20Object%5D&name=logo.png&originHeight=1487&originWidth=1237&size=153699&status=done&style=none&width=141" align="center" alt="Async Import React Component" />
 <h2 align="center">Async Import React Component</h2>
 <p align="center">Allows you to load React components asynchronously!</p>
</p>
  <p align="center">
    <a href="https://github.com/vortesnail/async-import-react-component/actions">
      <img alt="Build And Test" src="https://img.shields.io/github/workflow/status/vortesnail/async-import-react-component/Deploy%20GitHub%20Pages?label=Build%20And%20Test&logo=github&style=flat-square"/>
    </a>
    <a href="https://codecov.io/gh/vortesnail/async-import-react-component">
      <img alt="Tests Passing" src="https://img.shields.io/codecov/c/github/vortesnail/async-import-react-component?style=flat-square" />
    </a>
    <br />
  </p>

  <!-- <p align="center">
    <a href="">View Demo</a>
    ·
    <a href="https://github.com/vortesnail/async-import-react-component/issues/new">Report Bug</a>
    ·
    <a href="https://github.com/vortesnail/async-import-react-component/issues/new">Request Feature</a>
  </p> -->
  <p align="center">
    <a href="README_cn.md">简体中文</a>
    ·
    <a href="README_en.md">English</a>
  </p>
</p>

## What it is?

This is a simple Higher-order function that allows you to load React components asynchronously from split chunks.

## How to use?

### Install

```bash
npm install async-import-react-component --save
```

### Usage

You can use two methods, one is to pass in the function directly, and the other is to pass in as an object.

- **Directly**

```javascript
import getAsyncComponent from 'async-import-react-component'

const ComponentOne = getAsyncComponent(() => import('Components/ComponentOne'))
```

- **Optically**

```javascript
import getAsyncComponent from 'async-import-react-component'

const ComponentTwo = getAsyncComponent({
  resolve: () => import('Components/ComponentTwo'),
  loading: <div>ComponentTwo is loading...</div>,
  error: <div>An error has occurred, please check the component you import.</div>,
  delay: 1000,
})
```

## Need help!

In view of the lack of self writing test ability, please have the ability to write unit test friend can contribute to improve this simple project, I will be very grateful to you.
