import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AddMovie() {

    //create states to store user input for each category
    const [movieTitle, setMovieTitle] = useState('');
    const [movieUrl, setMovieUrl] = useState('');
    const [movieDescription, setMovieDescription] = useState('');
    const [movieGenre, setMovieGenre] = useState('');

    //declare history
    const history = useHistory();
    //declare dispatch
    const dispatch = useDispatch();

    //create a function to take user back to home page
    const cancelAdd = () => {
        history.push('/');
    }

    //create a function that captures user input
    const handleSubmit = (event) => {
        event.preventDefault();
        //create an object to send to saga
        let movieObject = {
            title: movieTitle,
            poster: movieUrl,
            description: movieDescription,
            genre_id: movieGenre 
        }
        // dispatch object to saga
        dispatch({
            type: 'ADD_MOVIE',
            payload: movieObject
        });

        //send user to home page
        history.push('/');

        //clear inputs
        setMovieTitle('');
        setMovieUrl('');
        setMovieDescription('');
        setMovieGenre('');

    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Movie Title"
                onChange={(evt) => setMovieTitle(evt.target.value)}
                value={movieTitle} />

            <input
                type="text"
                placeholder="Image URL"
                onChange={(evt) => setMovieUrl(evt.target.value)}
                value={movieUrl} />

            <input
                type="text"
                placeholder="Movie Description"
                onChange={(evt) => setMovieDescription(evt.target.value)}
                value={movieDescription} />

            <label htmlFor="genres">Movie Genre:</label>
            <select name="genre_id" onChange={(evt) => setMovieGenre(evt.target.value)}>
                <option value="" disabled selected>Genres</option>
                <option value="1">Adventure</option>
                <option value="2">Animated</option>
                <option value="3">Biographical</option>
                <option value="4">Comedy</option>
                <option value="5">Disaster</option>
                <option value="6">Drama</option>
                <option value="7">Epic</option>
                <option value="8">Fantasy</option>
                <option value="9">Musical</option>
                <option value="10">Romantic</option>
                <option value="11">Science Fiction</option>
                <option value="12">Space-Opera</option>
                <option value="13">Superhero</option>
            </select>

            <button onClick={cancelAdd}>Cancel</button>
            <button
                type="submit">
                Save</button>
        </form>
    )
}

export default AddMovie;