import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [

    ]
  }

  render() {
    let value = 0

    const test = () => {
      if (this.props.opacity - value >= 0.2) {
        value += 0.1

        return (
          <div className="color-box" style={{opacity: this.props.opacity - value}}>
            {console.log(typeof this)}
            {test()}
          </div>
        )
      } else if (this.props.opacity - value < 0.2) {
        return null
      }
    }
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {
          test()
        }
      </div>
    )
  }

}
