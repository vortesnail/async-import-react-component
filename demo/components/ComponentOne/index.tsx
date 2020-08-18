import React from 'react'
import './index.scss'

interface Props {
  name: string
}

function ComponentOne(props: Props) {
  const { name } = props
  return <p className='component-one'>Hi, I am ComponentOne!{name}</p>
}

export default ComponentOne
