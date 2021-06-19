import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

function MovieDetails () {

    //declare dispatch
    const dispatch = useDispatch();
    //bring in genres reducer
    const movies = useSelector( store => store.genres);


    // useEffect(() => {
    //     dispatch({type: 'ALL_DETAILS'});
    // }, []);




return (
    <p> {movies} </p>
)


}

export default MovieDetails; 