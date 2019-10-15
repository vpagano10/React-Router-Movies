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
    <>
      <div>
        <SavedList list={savedList} />
        <div>
          <Route exact path='/' component={MovieList} />
          <Route exact path='/movies/:movieID' render={(props) => <Movie {...props} addToSavedList={addToSavedList}/>} />
        </div>
      </div>
    </>
  );
};

export default App;
