import React from 'react';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      stepVal: 1,
      max: Infinity,
    };
  }
  Increment = () => {
    (this.state.counter + this.state.stepVal) < this.state.max ? 
    this.setState({
      counter: this.state.counter + this.state.stepVal,
    }) : this.setState({
      counter: this.state.counter
    });
  }
  Decrement = () => {
    this.setState({
      counter: this.state.counter - this.state.stepVal,
    })
  }
  Reset = () => {
    this.setState({
      counter: 0,
      stepVal: 1,
      max: Infinity
    })
  }
  render(){
    let steps = [5, 10, 15];
    let maxVals = [15, 100, 200];
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
        <h3>Max Value:</h3>
        <div className="steps-container">
          {
            maxVals.map(val => (
              <span className={this.state.max === val ? "step active" : "step"} onClick={() => {
                this.setState({
                  max: val,
                })
              }}>{val}</span>
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