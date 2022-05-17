import React from "react";
import { Greeting } from "../greeting/Greeting";
import { LoginButon } from "./components/LoginButton";
import { LogoutButton } from "./components/LogoutButton";

export class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }
  handleLoginButton = () => {
    this.setState({ isLoggedIn: true })
  }
  handleLogoutButton = () => {
    this.setState({ isLoggedIn: false })
  }
  render() {
    return (
      <>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? <LogoutButton onClick={this.handleLogoutButton} /> : <LoginButon onClick={this.handleLoginButton} />}
      </>
    )
  }
}