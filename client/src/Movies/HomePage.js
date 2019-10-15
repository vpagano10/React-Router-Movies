import React from 'react';

function Home(props) {
    const routeToMovies =() => {
        props.history.push('/movies');
    };

    return (
        <div>
            <img
                className=''
                src='../../img/movies.jpg'
                alt=''
            />
            <button onClick={routeToMovies} className='movie-list-button'>
                Explore!
            </button>
        </div>
    );
}

export default Home;