import {Component} from "react";

class Counter extends Component {
  
  state = {
      count: 0
  }

  addNumber = () => {
    this.setState((preState) => ({count : preState.count + 1}))
  }

  deleteNumber = () => {
    this.setState((preState) => ({count : preState.count - 1}))
  }

  resetNumber = () => {
    this.setState({count : 0})
  }

  render() {
    return (
      <div className="box">
        <h1>Counter</h1>
        <p>{this.state.count}</p>
        <div className="btn-box">
          <button className="btn btnDelete" onClick={this.deleteNumber}> -1 </button>
          <button className="btn btnReset" onClick={this.resetNumber}> Reset </button>
          <button className="btn btnAdd" onClick={this.addNumber}> +1 </button>
        </div>
      </div>
    )
  }

}

export default Counter;