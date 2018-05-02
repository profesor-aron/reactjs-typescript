import React, { Component } from 'react'
import { MyInput } from './MyInput'
import { MyInput2 } from './MyInput2'
import { MyInput3 } from './MyInput3'

export class Login extends Component<any, any> {

  constructor(props: any) {
    super(props)
    this.state = {username: 'test', password: 'test'}
    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
  }

  handleChangeUsername(event: any) {
    this.setState({username: event.target.value});
  }

  handleChangePassword(event: any) {
    this.setState({password: event.target.value});
  }

  render() {
    const dataUsername = {
      label: 'Username',
      value: this.state.username,
      onchange: this.handleChangeUsername
    }
    return (
      <div>
        Login Page in contruction, enjoy it soon!
        <div>
          <input value={this.state.username} onChange={this.handleChangeUsername} />
        </div>
        <div>
          <input value={this.state.password} onChange={this.handleChangePassword} />
        </div>
        Username: {this.state.username}, and Password: {this.state.password}
        <MyInput2 name="username" component={MyInput} />
        <MyInput3 data={dataUsername} component={MyInput} />
      </div>
    )
  }
}
