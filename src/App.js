import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

const Warning = React.lazy(() => import('./Warning'))

const a = ' A'

class App extends Component {
  state = {
    count: 0,
  }

  increment = () => {
    this.setState(state => ({ count: ++state.count }))
  }

  decrement = () => {
    this.setState(state => ({ count: --state.count }))
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h1>Hello World.</h1>
        <h2 className={count > 10 ? 'warning' : null}>Count: {count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        {count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    )
  }
}

export default hot(module)(App)
