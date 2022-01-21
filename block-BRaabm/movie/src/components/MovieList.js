import React from 'react';

function MovieList(props){
  return (
    <div className="movie-container flex">
      {
        props.movies.map(movie => (
          <div key={movie.Title} className="movie-item">
            <img src={movie.Poster} />
            <div className="title-container">
              <h2>{movie.Title}</h2>
              <button onClick={() => props.handleClick(movie.Title)}>Know More!</button>
            </div>
          </div>
        ))
      } 
    </div> 
  );
}

export default MovieList;