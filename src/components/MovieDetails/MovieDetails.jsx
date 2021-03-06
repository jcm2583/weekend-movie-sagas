import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieDetails.css';
import Button from '@material-ui/core/Button';

function MovieDetails() {

    //declare dispatch
    const dispatch = useDispatch();
    //bring in genres reducer
    const movies = useSelector(store => store.genres);
    //declare history
    const history = useHistory();

    //create a function that returns user to previous page upon click
    const goBack = () => {
        history.goBack();
    }


    return (
        <div>
            {movies.map(movie => {
                return (<div key={movie.id}>
                    <h3><span>{movie.title}</span></h3>
                    <img className="border" src={movie.poster} alt={movie.title}></img>
                    <h4><span>{movie.genre}</span></h4>
                    <p><span>{movie.description}</span></p>
                    <Button variant="contained" onClick={goBack}>Back to List</Button>
                </div>
                )
            })}
        </div>
    )
}

export default MovieDetails;