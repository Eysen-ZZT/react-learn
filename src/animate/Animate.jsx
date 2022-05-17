import React from "react";
import './Animate.css'

export class Animate extends React.Component {
  state = {
    list: [
      { id: '01', value: 'Apple', selected: true },
      { id: '02', value: 'VIVO', selected: false },
      { id: '03', value: 'OPPO', selected: false },
    ]
  }
  componentDidMount() {
    const { list } = this.state;
    let index = 0;
    const intervalID = setInterval(() => {
      if (index > 2) {
        index = 0;
      }
      const newList = JSON.parse(JSON.stringify(list))
      newList.forEach((listItem, i) => {
        listItem.selected = index === i
      })
      this.setState({
        list: newList
      })
      index++;
    }, 400)
    setTimeout(() => {
      clearInterval(intervalID);
    }, 8000)
  }

  render() {
    return (
      <div>
        {this.state.list.map(listItem =>
          <div key={listItem.id} className={listItem.selected ? 'default blue-border' : 'default'} >
            {listItem.value}
          </div>
        )}
      </div>
    )
  }
}