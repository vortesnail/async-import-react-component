import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import getAsyncComponent from '../asyncComponent'

afterEach(cleanup)

const TestClassComponentOne = getAsyncComponent(() => import('./TestClassComponent'))
const TestClassComponentTwo = getAsyncComponent({
  resolve: () => import('./TestClassComponent'),
  loading: <div data-testid='loading'>loading...</div>,
})
const TestClassComponentThree = getAsyncComponent({
  resolve: () => import('./TestClassComponent'),
  loading: <div>loading...</div>,
  delay: 1000,
})

describe('render class components correctly', () => {
  it('render class components without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TestClassComponentOne welcome='Hello' />, div)
  })

  it("if getAsyncComponent's first parameter is a function, render class components correctly", () => {
    const div = document.createElement('div')
    ReactDOM.render(<TestClassComponentOne welcome='Hello' />, div)
  })

  it('loading component render correctly before final class component render', () => {
    const { getByTestId } = render(<TestClassComponentTwo welcome='Hello' />)
    expect(getByTestId('loading')).toHaveTextContent('loading...')
  })

  // I don't know how to implement the following tests

  // it('when set delay timeout, render....', () => {
  //   // need help
  // })

  // it('when error happens, render error component correctly', () => {
  //   // need help
  // })
})
