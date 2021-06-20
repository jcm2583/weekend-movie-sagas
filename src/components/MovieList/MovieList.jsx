import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'
import Button from '@material-ui/core/Button';

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
            <h1 className="title-spacing"><span className="span-class">Welcome To The Gallery Of Movies</span></h1>
            <h2><span>Click On A Movie To Learn More About It!</span></h2>
            <h2><span>Or Add Your Own!</span></h2>
            <h2><span>BUT NO SPOILERS!!!</span></h2>
            <Button style={{marginTop: "64px"}} variant="contained"onClick={formPage}>Add Movie</Button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div className="spacing" key={movie.id} >
                            <h3><span>{movie.title}</span></h3>
                            <img className="border" onClick={ () => captureDetails(movie)} src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;