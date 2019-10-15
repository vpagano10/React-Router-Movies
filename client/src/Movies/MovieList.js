import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          // console.log(response);
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);

  // const handleInputChange = event => {
  //   setQuery(event.target.value);
  // };
  
  return (
    <>
      <div className="movie-list">
        {movies.map(movie => (
          <NavLink to={`/movies/${movie.id}`}>
            <MovieDetails key={movie.id} movie={movie} />
          </NavLink>
        ))}
      </div>
      {/* <form>
          <input
            type='text'
            onChange={handleInputChange}
            value={query}
            name='name'
            tabIndex='0'
            placeholder='search by title'
            autocomplete='off'
          />
      </form> */}
    </>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
    <>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieList;
