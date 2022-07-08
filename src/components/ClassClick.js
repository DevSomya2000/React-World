import React, { Component } from 'react'

export class ClassClick extends Component {
    ClickHandler() {
        console.log('Clicked the button')
    }
    
    render() {
    return (
      <div>
        <button onClick={this.ClickHandler}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick