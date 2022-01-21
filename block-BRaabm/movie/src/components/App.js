import React from 'react';
import data from '../data.json';
import MovieList from './MovieList';
import MovieInfo from './MovieInfo';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentMovie: "",
      closed: true
    }
  }

/*
  handleClick = (title) => {
    this.setState((prevState) => {
      return {
        currentMovie: title
      }
    },
    () => {
      let currMovie = data.find(movie => movie.Title === title);
      return (
        <MovieInfo movie={currMovie} />
      )
    });
  }
*/

  handleClick = (title) => {
    this.setState( {
      currentMovie: title,
      closed: false
    })
  }
  handleClose = () => {
    this.setState({
      currentMovie: "",
      closed: !this.state.closed
    })
  }

  render(){
    let currMovie = data.find(movie => movie.Title === this.state.currentMovie);
    return (
      <>
        <h1 className='heading'>Movie APP</h1>
        {
          !this.state.currentMovie && this.state.closed ? <MovieList handleClick={this.handleClick} movies={data} /> : <MovieInfo handleClose={this.handleClose} movie={currMovie}/>
        }
      </>
    )
  }
}

export default App;