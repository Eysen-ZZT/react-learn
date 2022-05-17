import React from "react";

export class Reservation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    // 这里使用了 ES6 计算属性名称的语法更新给定输入名称对应的 state 值
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <form action="">
        <label htmlFor="">
          参与：
          <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleChange} />
        </label>
        <label htmlFor="">
          来宾人数：
          <input type="number" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleChange} />
        </label>
      </form>
    )
  }
}