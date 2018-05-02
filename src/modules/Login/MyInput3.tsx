import React, { Component } from 'react'

export class MyInput3 extends Component<any, any> {
  render() {
    const {
      data,
      component: Compo
    } = this.props
    return (
      <div>
        <Compo label={data.label} value={data.username} onchange={data.onchange} />
      </div>
    )
  }
}
