import React, { useState } from 'react'
import getAsyncComponent from 'Src/asyncComponent'
import logo from './logo.png'
import githubIcon from './github.png'
import './app.scss'

const ComputedOne = getAsyncComponent(() => import('Components/ComputedOne'))
const ComputedTwo = getAsyncComponent(() => import('Components/ComputedTwo'))

function App() {
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
                window.open('https//www.github.com/vortesnail')
              }}
              alt=''
            />
          </div>
        </div>
      </header>
      <div className='logo-wrapper'>
        <img src={logo} alt='' />
        <p>This is a simple function that can let you import react component async from split chunks.</p>
      </div>
    </div>
  )
}

export default App
