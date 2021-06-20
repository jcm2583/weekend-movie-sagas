import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovie from '../AddMovie/AddMovie';

function App() {
  return (
    <div className="App">
      <h1><span>The Movies Saga!</span></h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path='/details'>
        <MovieDetails />
        </Route>

        <Route path='/addMovie'>
        <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
