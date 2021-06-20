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
            name: movieGenre 
        }
        // dispatch object to saga
        dispatch({
            type: 'ADD_MOVIE',
            payload: movieObject
        });

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
            <select name="genres" onChange={(evt) => setMovieGenre(evt.target.value)}>
                <option value="" disabled selected>Genres</option>
                <option value="Adventure">Adventure</option>
                <option value="Animated">Animated</option>
                <option value="Biographical">Biographical</option>
                <option value="Comedy">Comedy</option>
                <option value="Disaster">Disaster</option>
                <option value="Drama">Drama</option>
                <option value="Epic">Epic</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Musical">Musical</option>
                <option value="Romantic">Romantic</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Space-Opera">Space-Opera</option>
                <option value="Superhero">Superhero</option>
            </select>

            <button onClick={cancelAdd}>Cancel</button>
            <button
                type="submit">
                Add Movie</button>
        </form>
    )
}

export default AddMovie;