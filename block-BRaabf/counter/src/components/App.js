import React from 'react';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    };
  }
  Increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
  Decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    })
  }
  Reset = () => {
    this.setState({
      counter: 0,
    })
  }
  render(){
    return (
      <>
        <h1>counter App</h1>
        <h3>{this.state.counter}</h3>
        <button onClick={this.Increment}>Increment</button>
        <button onClick={this.Decrement}>Decrement</button>
        <button onClick={this.Reset}>Reset</button>
      </>
    )
  }
}

export default App;