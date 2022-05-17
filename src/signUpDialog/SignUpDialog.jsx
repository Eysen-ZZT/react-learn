import React from "react";
import { Dialog } from "./components/Dialog";

export class SignUpDialog extends React.Component {
  // 不使用构造器的写法
  state = { login: '' }

  handleChange = (e) => {
    this.setState({
      login: e.target.value
    })
  }
  handleSignUp = () => {
    alert(`Welcome aboard, ${this.state.login}!`);
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program" message="How should we refer to you?">
        <input type="text" value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up
        </button>
      </Dialog>
    )
  }
}