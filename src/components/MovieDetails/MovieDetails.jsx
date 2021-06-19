import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function MovieDetails () {

    //declare dispatch
    const dispatch = useDispatch();
    //bring in movies reducer
    //bring in genres reducer
    const movies = useSelector( store => store.genres);

    const history = useHistory();

    // useEffect(() => {
    //     dispatch({type: 'ALL_DETAILS'});
    // }, []);

    const goBack = () => {
        console.log('clicker working');
        history.goBack();
    }


return ( 
    <div>
     {movies.map ( movie => {
        return(<div key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title}></img>
            <h4>{movie.genre}</h4>
            <p>{movie.description}</p>
            <button onClick={goBack}>Back to List</button>
            </div>
        )
    } )}
    </div>
)
}

export default MovieDetails; 