import React, { Component, ReactNode, ComponentType } from 'react'

type ModuleNamespace<T> = { default: ComponentType<T> }
type PromiseFun<T> = () => Promise<ModuleNamespace<T>>

interface Options<T> {
  resolve: PromiseFun<T>
  loading?: ReactNode
  error?: ReactNode
  delay?: number
}

interface State<T> {
  readonly ResultComponent: ComponentType<T> | null
  readonly status: 'loading' | 'error' | 'normal'
}

function getAsyncComponent<T>(options: Options<T> | PromiseFun<T>) {
  let resolve: PromiseFun<T>
  let LoadingComponent: ReactNode = null
  let ErrorComponent: ReactNode = null
  let delay = 0

  if (typeof options === 'function') {
    resolve = options
  } else if (Object.prototype.toString.call(options) === '[object Object]') {
    if (typeof options.resolve === 'function') {
      resolve = options.resolve
    } else {
      throw new TypeError('`resolve` must be a function like: () => import("./xxx").')
    }
    LoadingComponent = options.loading === undefined ? null : options.loading
    ErrorComponent = options.error === undefined ? null : options.error
    delay = options.delay === undefined ? 0 : options.delay
  } else {
    throw new Error('Please make sure the input `option` meets the specification.')
  }

  return class asyncComponent extends Component<T, State<T>> {
    constructor(props: T) {
      super(props)
      this.state = {
        ResultComponent: null,
        status: 'loading',
      }
    }

    async componentDidMount() {
      const { default: ResultComponent } = await resolve()
      if (ResultComponent) {
        setTimeout(() => {
          this.setState({
            ResultComponent,
            status: 'normal',
          })
        }, delay)
      } else {
        this.setState({
          status: 'error',
        })
      }
    }

    render() {
      const { status, ResultComponent } = this.state
      if (status === 'loading') {
        return LoadingComponent
      }
      if (status === 'error') {
        return ErrorComponent
      }
      return ResultComponent ? <ResultComponent {...this.props} /> : null
    }
  }
}

export default getAsyncComponent
