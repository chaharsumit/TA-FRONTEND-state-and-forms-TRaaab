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


/*
  ---------controlled Component---------- 

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      password: '',
      email: '',
      errors: {
        password: '',
        email: ''
      }
    }
  }

  validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  handleChange = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;

    switch (name) {
      case "email":
        errors.email = this.validateEmail(value) ? "" : "Email not valid"
        break;
      case "password":
        errors.password = value.length < 6 ? "Password can't be less than 5 characters" : ""
        break;
      default:
        break;
    }

    this.setState(
      {
        errors,
        [name] : value
      }
    )
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`the password is ${this.state.password} and the email is ${this.state.email}`);
  }

  render(){
    let { email, password } = this.state.errors; 
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input onChange={this.handleChange} value={this.state.email} type="email" name="email" id="email" className={email && "error"} />
        <span>{email}</span>
        <label htmlFor='password'>Password</label>
        <input onChange={this.handleChange} value={this.state.password} type="password" name="password" id="password" className={password && "error"} />
        <span>{password}</span>
        <input type="submit" value="submit" />
      </form>
    )
  }
}

*/




/*
  ---------controlled Component---------- 


class App extends React.Component{
  constructor(props){
    super(props);
    this.inputText = React.createRef(); 
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`the input value is ${this.inputText.current.value}`);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input ref={this.inputText} type="email" name="email" id="email" />
        <input type="submit" value="submit" />
      </form>
    )
  }
}

*/

export default App;