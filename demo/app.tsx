import React, { useState } from 'react'
import getAsyncComponent from 'Src/asyncComponent'

const ComputedOne = getAsyncComponent(() => import('Components/ComputedOne'))
const ComputedTwo = getAsyncComponent(() => import('Components/ComputedTwo'))

function App() {
  const [showTwo, setShowTwo] = useState<boolean>(false)

  return (
    <div className='app'>
      <ComputedOne a={1} b={2} />
      {showTwo && <ComputedTwo a={3} b={4} />}
      <button type='button' onClick={() => setShowTwo(true)}>
        显示Two啊啊啊
      </button>
    </div>
  )
}

export default App
