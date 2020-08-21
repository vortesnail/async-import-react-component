import React, { Component } from 'react'

interface Props {
  welcome: string
}

interface State {
  name: string
  age: number
}

class TestClassComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      name: 'vortesnail',
      age: 25,
    }
  }

  render() {
    const { name, age } = this.state
    const { welcome } = this.props

    return <div data-testid='show-div'>{`${welcome}, I'm ${age} years old, just call me ${name}`}</div>
  }
}

export default TestClassComponent
