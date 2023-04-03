import React from "react";

export class ClickEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    }
  }
  /* componentDidMount() {
    // 类本身调用 handleBtn 方法
    this.handleBtn();
  } */
  handleBtn=()=> {
    // 如果是类本身调用自身方法，this 指向 ClickEvent 类
    // 如果是 btn 按钮事件调用, this 为 undefined
    console.log(this);
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <>
        <div>
          {/* 
            解决 handleBtn 方法内部 this 为 undefined 的方法
            1. 通过 handleBtn = () => {} 定义方法
            2. 在 onClick 回调函数中使用箭头函数 onClick={() => {this.handleBtn()}}
            3. 通过bind修改 this 指向onClick={this.handleBtn.bind(this)}
          */}
          <button onClick={() => { this.handleBtn() }}>{this.state.isOpen ? 'no' : 'off'}</button>
          {/* <button onClick={this.handleBtn.bind(this)}>{this.state.isOpen ? 'no' : 'off'}</button> */}
        </div>
      </>
    )
  }
}