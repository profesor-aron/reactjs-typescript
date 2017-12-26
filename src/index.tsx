import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Arriba siempre arriba hasta las estrellas!</h1>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
