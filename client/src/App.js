import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import {Link} from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Link to='/'>Home</Link>
      <div>
        <Route exact path='/' component={MovieList} />
        <Route exact path='/movies/:movieID' component={Movie} />
      </div>
    </div>
  );
};

export default App;
