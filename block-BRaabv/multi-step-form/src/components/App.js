import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Header from './Header';
import Aside from './Aside';


class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      currentStep: 1,
      email: '',
      firstName: '',
      lastName: '',
      date: '',
      address: '',
      choice: '',
      message: '',
      choiceTwo: '',
      male: false,
      female: false,
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    if(event.target.type === 'checkbox'){
      this.setState((prevState) => {
        return {
          [name]: !prevState[name]
        }
      })
    }else{
      this.setState({
        [name]: value
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, firstName, lastName, date, address, choice, choiceTwo, male, female } = this.state;
    alert(`Your registration detail: \n
    Email: ${email} \n
    Name: ${firstName + lastName} \n
    DOB: ${date}`)
  }

  _next = (event) => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >=2 ? 3 : currentStep + 1
    
    this.setState({
      currentStep: currentStep
    })
  }

  _prev = (event) => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <=1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    })
  }

  get previousButton(){
    let currentStep = this.state.currentStep;

    if(currentStep !== 1){
      return (
        <button 
          className="btn btn-primary"
          type="button"
          onClick={this._prev}>
            Back
        </button>
      )
    }
    return null;
  }

  get nextButton(){
    let currentStep = this.state.currentStep;

    if(currentStep < 3){
      return (
        <button 
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}>
            Next Step
        </button>
      )
    }
    return null;
  }

  render(){
    return (
      <div className='container flex'>
        <section className='main flex'>
          <Aside currentStep={this.state.currentStep} />
          <div className='form-content-container flex'>
            <Header currentStep={this.state.currentStep} />

            <form onSubmit={this.handleSubmit}>

              <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.email}
              />

              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                username={this.state.username}
              />

              <Step3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                password={this.state.password}
              />

              {this.previousButton}
              {this.nextButton}

            </form>

          </div>
        </section>
      </div>
    )
  }
}

/*

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder="Enter email"
        value={props.email}
        onChange={props.handleChange}
        />
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="username">Username</label>
      <input
        className="form-control"
        id="username"
        name="username"
        type="text"
        placeholder="Enter username"
        value={props.username}
        onChange={props.handleChange}
        />
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <React.Fragment>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input
        className="form-control"
        id="password"
        name="password"
        type="password"
        placeholder="Enter password"
        value={props.password}
        onChange={props.handleChange}
        />      
    </div>
    <button className="btn btn-success btn-block">Sign up</button>
    </React.Fragment>
  );
}

*/

export default App;