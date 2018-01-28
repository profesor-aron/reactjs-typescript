import React, { Component } from 'react'
import { render } from 'react-dom'

import {Login} from './modules/Login'

class App extends Component {
  render() {
    const data = {
      appName: 'React JS TypeScript',
      devepoler: 'Aron HERRERA PONTE'
    }

    let allData = {
      ...data,
      twitterAccount: '@aehp20'
    }

    const displayData = () => {
      const convertObjToArray = () => {
        const items = []
        for (const key in allData) {
          items.push({key, value: allData[key]})
        }
        return items
      }
      return (
        <ul>
          {
            convertObjToArray().map((item, index) => <li key={index}>{item.key} : {item.value}</li>)
          }
        </ul>
      )
    }

    return (
      <div>
        <h1>Arriba siempre arriba hasta las estrellas!</h1>
        {displayData()}
        <Login/>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
