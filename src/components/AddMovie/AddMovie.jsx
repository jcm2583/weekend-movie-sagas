

function AddMovie () {

    return (
        <form> 
            <input type="text" placeholder="Movie Title" />
            <input type="text" placeholder="Image URL" />
            <input type="text" placeholder="Movie Description" />
            <label for="genres">Movie Genre:</label>
            <select name="genres" placeholder="Genres">
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
        </form>
    )
}

export default AddMovie;