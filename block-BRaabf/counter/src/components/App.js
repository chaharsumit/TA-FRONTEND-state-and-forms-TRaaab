import React from 'react';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      stepVal: 1,
    };
  }
  Increment = () => {
    this.setState({
      counter: this.state.counter + this.state.stepVal,
    })
  }
  Decrement = () => {
    this.setState({
      counter: this.state.counter - this.state.stepVal,
    })
  }
  Reset = () => {
    this.setState({
      counter: 0,
    })
  }
  render(){
    let steps = [5, 10, 15];
    return (
      <>
        <h1>{this.state.counter}</h1>
        <h3>Steps :</h3>
        <div className="steps-container">
          {
            steps.map(step => (
              <span className={this.state.stepVal === step ? "step active" : "step"} onClick={() => {
                this.setState({
                  stepVal: step,
                })
              }}>{step}</span>
            ))
          }
        </div>
        <div className="buttons-container">
          <button onClick={this.Increment}>Increment</button>
          <button onClick={this.Decrement}>Decrement</button>
          <button onClick={this.Reset}>Reset</button>
        </div>
      </>
    )
  }
}

export default App;