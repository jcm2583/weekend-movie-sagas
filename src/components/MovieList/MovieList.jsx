import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    //declare history
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //create a function that sends the user to the /details page
    const captureDetails = (movie) => {
        //capture the movie that the user clicked on and send it to a reducer
        dispatch({type: 'FETCH_DETAILS', payload: movie})
        //send the user to the details page of movie that was clicked on 
        history.push('/details');
    }

    //create a function that will take the user to the form page to add a movie
    const formPage = () => {
        history.push('/addMovie');
    }

    return (
        <main>
            <h1>MovieList</h1>
            <button onClick={formPage}>Add Movie</button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={ () => captureDetails(movie)} src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;