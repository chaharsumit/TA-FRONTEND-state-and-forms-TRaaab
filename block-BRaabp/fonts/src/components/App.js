import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: "",
      range: 49
    }
  }

  handleText = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleRange = (event) => {
    this.setState({
      range: event.target.value
    })
  }

  refresh = () => {
    this.setState({
      text: "",
      range: 49
    })
  }

  render(){
    return (
      <div className='container'>
        <header className='header flex'>
          <p className='flex-8 custom'>Custom <span>▼</span></p>
          <input onChange={this.handleText} value={this.state.text} placeholder='Type something...' className='flex-50' />
          <div className='range-container flex-30 flex'>
            <p className='flex-20'>{this.state.range}px <span>▼</span></p>
            <input onChange={this.handleRange} value={this.state.range} type="range" min="8" max="300" className='flex-75 slider' />
          </div>
          <p className='flex-5 reload' onClick={this.refresh}>↻</p>
        </header>
        <section className='flex'>
          <article className='style-card flex'>
            <div className='style-info-container flex'>
              <h3>Roboto</h3>
              <p>12 styles</p>
            </div>
            <p>Christian Robertson</p>
            <div className='font-text' style={{fontSize: `${this.state.range}px`}}>
              {this.state.text}
            </div>
          </article>
          <article className='style-card flex'>
            <div className='style-info-container flex'>
              <h3>Roboto</h3>
              <p>12 styles</p>
            </div>
            <p>Christian Robertson</p>
            <div className='font-text' style={{fontSize: `${this.state.range}px`}}>
              {this.state.text}
            </div>
          </article>
          <article className='style-card flex'>
            <div className='style-info-container flex'>
              <h3>Roboto</h3>
              <p>12 styles</p>
            </div>
            <p>Christian Robertson</p>
            <div className='font-text' style={{fontSize: `${this.state.range}px`}}>
              {this.state.text}
            </div>
          </article>
          <article className='style-card flex'>
            <div className='style-info-container flex'>
              <h3>Roboto</h3>
              <p>12 styles</p>
            </div>
            <p>Christian Robertson</p>
            <div className='font-text' style={{fontSize: `${this.state.range}px`}}>
              {this.state.text}
            </div>
          </article>
          <article className='style-card flex'>
            <div className='style-info-container flex'>
              <h3>Roboto</h3>
              <p>12 styles</p>
            </div>
            <p>Christian Robertson</p>
            <div className='font-text' style={{fontSize: `${this.state.range}px`}}>
              {this.state.text}
            </div>
          </article>
          <article className='style-card flex'>
            <div className='style-info-container flex'>
              <h3>Roboto</h3>
              <p>12 styles</p>
            </div>
            <p>Christian Robertson</p>
            <div className='font-text' style={{fontSize: `${this.state.range}px`}}>
              {this.state.text}
            </div>
          </article>
          <article className='style-card flex'>
            <div className='style-info-container flex'>
              <h3>Roboto</h3>
              <p>12 styles</p>
            </div>
            <p>Christian Robertson</p>
            <div className='font-text' style={{fontSize: `${this.state.range}px`}}>
              {this.state.text}
            </div>
          </article>
          <article className='style-card flex'>
            <div className='style-info-container flex'>
              <h3>Roboto</h3>
              <p>12 styles</p>
            </div>
            <p>Christian Robertson</p>
            <div className='font-text' style={{fontSize: `${this.state.range}px`}}>
              {this.state.text}
            </div>
          </article>
          <article className='style-card flex'>
            <div className='style-info-container flex'>
              <h3>Roboto</h3>
              <p>12 styles</p>
            </div>
            <p>Christian Robertson</p>
            <div className='font-text' style={{fontSize: `${this.state.range}px`}}>
              {this.state.text}
            </div>
          </article>
        </section>
      </div>
    )
  }
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