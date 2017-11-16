document.write('welcome to my app');
console.log('app loaded');

import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hola abuelita Fanny</h1>
        <p>Hello world!</p>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))

/*
const App = () => {
  return (
    <div>
      <p>Hello world!</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
*/
