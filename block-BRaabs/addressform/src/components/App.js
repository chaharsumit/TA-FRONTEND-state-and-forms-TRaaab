import React from 'react';
import Shipping from './Shipping';
import Billing from './Billing';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      shipping : {
        address: '',
        zip: '',
        city: '',
        country: '',
      },
      billing: {
        address: '',
        zip: '',
        city: '',
        country: '',
      },
      isSame: false,
    }
  }

  handleInput = ({ target }) => {
    let { name, value } = target;
    let { shipping } = this.state;
    let { billing } = this.state;

    if(target.parentElement.id === "shipping"){
      this.setState({
        shipping: {...shipping, [name]: value}
      });
    }else{
      this.setState({
        billing: {...billing, [name]: value}       
      });
    }
    
  }

  handleCheckbox = ({ target }) => {
    let { billing } = this.state;
    let { shipping } = this.state;

    let bills = {};

    for(let key in this.state.billing){
      bills[key] = '';
    }

    console.log(bills);
    this.setState((prevState) => {
      return {
        isSame: !prevState.isSame
      }
    }, () => {
      this.state.isSame ? this.setState({
        billing: {...shipping}
      }) : this.setState({
        billing: bills
      })
    })
  }

  render(){
    return (
      <>
        <Shipping state={this.state} handleInput={this.handleInput} />
        <Billing state={this.state} handleCheckbox={this.handleCheckbox} handleInput={this.handleInput} />
      </>
    )
  }
}

export default App;

/*
import React from 'react';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPass: '',
      errors: {
        username: '',
        email: '',
        password: '',
        confirmPass: '' 
      }
    }
  }

  validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  handleInput = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;

    switch (name) {
      case "email":
        errors.email = this.validateEmail(value) ? "" : "Email not valid"
        break;
      case "password":
        errors.password = value.length < 6 ? "Password can't be less than 6 characters" : ""
        break;
      case "username":
        errors.username = value.length < 3 ? "Username must be at least 3 characters" : ""
        break;
      case "confirmPass":
        errors.confirmPass = !value ? "Password2 is required" : ""
        break;
      default:
        break;
    }

    this.setState({
      errors,
      [name]: value
    });
  }


  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.password !== this.state.confirmPass){
      alert('wrong pas');
    }
  }

  render(){
    let {username,email,password,confirmPass} = this.state.errors;
    return (
      <form className='Login-form' onSubmit={this.handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input onChange={this.handleInput} type="username" name="username" id="username" placeholder='Enter Username' className={username && "error"} />
        <span>{username}</span>

        <label htmlFor='email'>Email</label>
        <input onChange={this.handleInput} type="email" name="email" id="email" placeholder='Enter Email' className={email && "error"}  />
        <span>{email}</span>

        <label htmlFor='password'>Password</label>
        <input onChange={this.handleInput} type="password" name="password" id="password" placeholder='Enter Password' className={password && "error"} />
        <span>{password}</span>

        <label htmlFor='confirmPass'>Confirm Password</label>
        <input onChange={this.handleInput} type="password" name='confirmPass' id="confirmPass" placeholder='Enter Password again' className={confirmPass && "error"} />
        <span>{confirmPass}</span>

        <input onChange={this.handleInput} type="submit" value="submit" />

      </form>
    )
  }
}
*/