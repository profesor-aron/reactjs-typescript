import React, { Component } from 'react'

export class MyInput2 extends Component<any, any> {

  constructor(props: any) {
    super(props)
    this.state = {label: 'Username', username: 'test', password: 'test'}
    this.handleChangeUsername = this.handleChangeUsername.bind(this)
  }

  handleChangeUsername(event: any) {
    this.setState({username: event.target.value});
  }

  render() {
    const {component: Compo} = this.props
    return (
      <div>
        <Compo label={this.state.label} value={this.state.username} onchange={this.handleChangeUsername} />
      </div>
    )
  }
}
