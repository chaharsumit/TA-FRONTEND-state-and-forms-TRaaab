import React from 'react';

function App(){
  
}


export default App;

/*
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputText: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }

  handleClick = () => {
    console.log(this.state.inputText);
  }

  render(){
    return (
      <>
        <input onChange={this.handleChange} value={this.state.inputText} type="text" />
        <button onClick={this.handleClick}>Submit</button>
      </>
    )
  }
}
*/