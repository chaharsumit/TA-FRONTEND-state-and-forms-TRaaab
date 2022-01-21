import React from 'react';
import data from '../data.json';

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
    return (
      <>
        <h1 className='heading'>Movie APP</h1>
        {
          !this.state.currentMovie && this.state.closed ? 
          <div className="movie-container flex">
            {
              data.map(movie => (
                <div key={movie.Title} className="movie-item">
                  <img src={movie.Poster} />
                  <div className="title-container">
                    <h2>{movie.Title}</h2>
                    <button onClick={() => this.handleClick(movie.Title)}>Know More!</button>
                  </div>
                </div>
              ))
            } 
          </div> 
          :
          <div className='movie-info-container'>
            <h1>Avatar</h1>
            <h3>Rated: PG-13</h3>
            <h3>Released: 18 Dec 2009</h3>
            <h3>162 min</h3>
            <h3>Action, Adventure, Fantasy</h3>
            <h3>Director: James Cameron</h3>
            <h3>Writer: James Cameron</h3>
            <h3>Actors: Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang</h3>
            <h3>Plot: A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.</h3>
            <h3>Language: English</h3>
            <h3>Country: USA, UK</h3>
            <h3>Metascore: 83</h3>
            <h3>Metascore: 83</h3>
            <h3>Metascore: 83</h3>
            <h3>Metascore: 83</h3>
            <h3>Type: movie</h3>
            <h3>Response: true</h3>
            <div className='image-gallery flex'>
              <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg" />
              <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg" />
              <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg" />
              <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg" />
              <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg" />
            </div>
            <button className='cross' onClick={this.handleClose}>X</button>
          </div>
        }
      </>
    )
  }
}

export default App;