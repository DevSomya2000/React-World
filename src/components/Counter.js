import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      }
    }

    countIncrease() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log('Callback Value', this.state.count)
        // })
        this.setState((prevState) => ({
            count: prevState.count + 1
        }),() => {
            console.log('Callback Value',this.state.count)
        })
        console.log(this.state.count)
    }
    
    render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.countIncrease()}>Increase</button>
      </div>
    )
  }
}

export default Counter