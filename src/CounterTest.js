import React, { Component } from "react";

class CounterTest extends Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState(prevState => ({count: prevState.count +1 }))
  }

  decrement = () => {
    this.setState(prevState => ({count: prevState.count -1 }))
  }

  render() {
    const {count: number} = this.state
    return (
      <div>
        <h1>Counter Test => { number }</h1>       
        <button onClick={this.increment} >+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default CounterTest