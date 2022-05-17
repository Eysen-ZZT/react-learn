import React from "react";
import { UserGreeting } from "./components/UserGreeting";
import { GuestGreeting } from "./components/GuestGreeting";

export class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <>
        {this.props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
      </>
    )
  }
}