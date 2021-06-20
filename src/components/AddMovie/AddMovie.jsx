import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Select, MenuItem} from '@material-ui/core';
import './AddMovie.css';

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
        
    <div className="flex-container">  

        <form onSubmit={handleSubmit}>
            <TextField
                variant="filled"
                style={{backgroundColor: "white", width: 300, margin: "16px" }}
                type="text"
                label="Movie Title"
                onChange={(evt) => setMovieTitle(evt.target.value)}
                value={movieTitle} />

            <TextField
                variant="filled"
                style={{backgroundColor: "white", width: 300, margin: "16px"}}
                type="text"
                label="Image URL"
                onChange={(evt) => setMovieUrl(evt.target.value)}
                value={movieUrl} />

            <TextField
                variant="filled"
                multiline
                style={{backgroundColor: "white", width: 300, margin: "16px"}}
                type="text"
                label="Movie Description"
                onChange={(evt) => setMovieDescription(evt.target.value)}
                value={movieDescription} />

            <Select
            style={{backgroundColor: "white", width: 150, margin: "16px"}}
            value={movieGenre} displayEmpty
            onChange={(evt) => setMovieGenre(evt.target.value)}>
                <MenuItem value="" disabled>Select Genre</MenuItem>
                <MenuItem value="1">Adventure</MenuItem>
                <MenuItem value="2">Animated</MenuItem>
                <MenuItem value="3">Biographical</MenuItem>
                <MenuItem value="4">Comedy</MenuItem>
                <MenuItem value="5">Disaster</MenuItem>
                <MenuItem value="6">Drama</MenuItem>
                <MenuItem value="7">Epic</MenuItem>
                <MenuItem value="8">Fantasy</MenuItem>
                <MenuItem value="9">Musical</MenuItem>
                <MenuItem value="10">Romantic</MenuItem>
                <MenuItem value="11">Science Fiction</MenuItem>
                <MenuItem value="12">Space-Opera</MenuItem>
                <MenuItem value="13">Superhero</MenuItem>
            </Select>
        
            <Button
                style={{margin: "16px"}}
                variant="contained"
                onClick={cancelAdd}
                >Cancel
            </Button>

            <Button
                style={{margin: "16px"}}
                variant="contained"
                type="submit">
                Save
            </Button>
        </form>

    </div>
    )
}

export default AddMovie;