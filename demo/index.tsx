import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './index.scss'

if (module && module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.querySelector('#root'))
