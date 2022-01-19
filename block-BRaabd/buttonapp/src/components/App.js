import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      imageUrl: "", 
    }
  };
  basketball = () => {
    this.setState({
      imageUrl: '/assets/basketball.jpg'
    })
  };
  pubg = () => {
    this.setState({
      imageUrl: '/assets/pubg.jpeg'
    })
  };
  cricket = () => {
    this.setState({
      imageUrl: '/assets/cricket.jpg'
    })
  };
  phone = () => {
    this.setState({
      imageUrl: '/assets/phone.jpg'
    })
  };
  tiger = () => {
    this.setState({
      imageUrl: '/assets/tiger.jpg'
    })
  };
  laptop = () => {
    this.setState({
      imageUrl: '/assets/laptop.jpg'
    })
  };
  render (){
    return (
      <>
      <div className="button-container">
        <button onClick={this.basketball}>Basketball</button>
        <button onClick={this.pubg}>PubG</button>
        <button onClick={this.tiger}>Tiger</button>
        <button onClick={this.phone}>Phone</button>
        <button onClick={this.laptop}>Laptop</button>
        <button onClick={this.cricket}>Cricket</button>
      </div>
        <img src={this.state.imageUrl} alt="image" />
      </>
    )
  }
}

export default App;