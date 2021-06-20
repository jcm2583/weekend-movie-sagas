import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';

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

            <TextField
                variant="filled"
                style={{backgroundColor: "white", width: 300 }}
                type="text"
                label="Movie Title"
                onChange={(evt) => setMovieTitle(evt.target.value)}
                value={movieTitle} />

            <TextField
                variant="filled"
                style={{backgroundColor: "white", width: 300}}
                type="text"
                label="Image URL"
                onChange={(evt) => setMovieUrl(evt.target.value)}
                value={movieUrl} />

            <TextField
                variant="filled"
                style={{backgroundColor: "white", width: 300}}
                type="text"
                label="Movie Description"
                onChange={(evt) => setMovieDescription(evt.target.value)}
                value={movieDescription} />

            <label htmlFor="genres">Movie Genre:</label>
            <Select name="genre_id" onChange={(evt) => setMovieGenre(evt.target.value)}>
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
            </Select>

            <Button
                variant="contained"
                onClick={cancelAdd}
                >Cancel
            </Button>

            <Button
                variant="contained"
                type="submit">
                Save
            </Button>
        </form>
    )
}

export default AddMovie;