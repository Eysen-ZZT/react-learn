import React from "react";

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this, 'constructor');
    this.state = { date: new Date() }
  }
  componentDidMount() {
    this.timeID = setInterval(() => {
      this.trick();
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timeID)
  }
  trick() {
    // console.log(this, 'trick');
    this.setState({
      date: new Date()
    })
  }
  render() {
    // console.log(this, 'render');
    return (
      <div>
        <h1>Hello World!</h1>
        <div>{this.state.date.toLocaleTimeString()}</div>
      </div>
    )
  }
}