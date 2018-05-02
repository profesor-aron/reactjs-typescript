import React, { Component } from 'react'

export class MyInput extends Component<any, any> {

  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>
          {this.props.label}
          <input value={this.props.value} onChange={this.props.onchange} />
        </div>
        Value: {this.props.value}
      </div>
    )
  }
}
