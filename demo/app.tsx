import React, { useState } from 'react'
import ReactLoading from 'react-loading'
import getAsyncComponent from 'Src/asyncComponent'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import logo from './logo.png'
import githubIcon from './github.png'
import './app.scss'

const ComponentOne = getAsyncComponent(() => import('Components/ComponentOne'))
const ComponentTwo = getAsyncComponent({
  resolve: () => import('Components/ComponentTwo'),
  loading: <ReactLoading type='cylon' color='#2b9823' height={60} width={60} />,
  error: <div>An error has occurred, please check the component you import.</div>,
  delay: 3000,
})

const firstCodeStr = 'npm install async-import-react-component --save'

const secondCodeStr = `import getAsyncComponent from 'async-import-react-component'

// Basic
const ComponentOne = getAsyncComponent(() => import('Components/ComponentOne'))
// More
const ComponentTwo = getAsyncComponent({
  resolve: () => import('Components/ComponentTwo'),
  loading: <div>ComponentTwo is loading...</div>,
  error: <div>An error has occurred, please check the component you import.</div>,
  delay: 3000,
})

function App() {
  const [showOne, setShowOne] = useState<boolean>(false)
  const [showTwo, setShowTwo] = useState<boolean>(false)

  return (
    <div className='app'>
      <button type='button' onClick={() => setShowOne(true)}>Load Component One</button>
      <button type='button' onClick={() => setShowTwo(true)}>Load Component Two</button>
      <div className='component-wrapper'>
        {showOne && <ComponentOne />}
        {showTwo && <ComponentTwo />}
      </div>
    </div>
  )
}

export default App`

function App() {
  const [showOne, setShowOne] = useState<boolean>(false)
  const [showTwo, setShowTwo] = useState<boolean>(false)

  return (
    <div className='app'>
      <header className='header-wrapper'>
        <p className='author-name'>Vortesnail</p>
        <div className='about-info'>
          <div className='logo'>
            <img
              src={githubIcon}
              onClick={() => {
                window.open('https://www.github.com/vortesnail')
              }}
              alt=''
            />
          </div>
        </div>
      </header>
      <div className='logo-wrapper'>
        <img src={logo} alt='' />
        <p>
          This is a simple Higher-order function that allows you to load React components asynchronously from split
          chunks.
        </p>
      </div>
      <div className='step-container'>
        <div className='intro-wrapper third'>
          <p className='step'>Demo</p>
          <div className='demo-wrapper'>
            <button type='button' onClick={() => setShowOne(true)}>
              Load Component One
            </button>
            {showOne && <ComponentOne name='vortesnail' />}
            <button type='button' onClick={() => setShowTwo(true)}>
              Load Component Two
            </button>
            {showTwo && <ComponentTwo />}
          </div>
        </div>
        <div className='intro-wrapper first'>
          <p className='step'>Install</p>
          <SyntaxHighlighter language='bash' style={base16AteliersulphurpoolLight}>
            {firstCodeStr}
          </SyntaxHighlighter>
        </div>
        <div className='intro-wrapper second'>
          <p className='step'>Usage</p>
          <SyntaxHighlighter language='typescript' style={base16AteliersulphurpoolLight}>
            {secondCodeStr}
          </SyntaxHighlighter>
        </div>
      </div>
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
      <footer className='footer-wrapper'>
        Email me via <b>1091331061@qq.com</b> and you are very welcome to PR.❤️
      </footer>
    </div>
  )
}

export default App
