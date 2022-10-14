import { useParams } from "react-router-dom"




const MovieListComponent = ({ movie, screens, cinemas, deleteMovie}) => {

    const { id } = useParams()
    const cinema = cinemas.find((cinema) => {
        const cinemaId = parseInt(id)
        return cinemaId === cinema.id;
    })

    const screensOptions = screens.map((screen) => {
        if (screen.cinema.id === cinema.id) {
            return <>
                <option key={screen.id} value={screen.id}>{screen.id}</option>
            </>

        }
    })

    const handleDeleteMovie = (evt) => {
        evt.preventDefault();
        deleteMovie(cinema.id, movie.id);
    } 

    return (
        <>
        
            <div className="movie-list-item">
            <img className="movie-poster" src="https://api.lorem.space/image/movie?w=150&amp;amp;amp;amp;h=220" alt="A Movie Poster"></img>
            <h4>Title: {movie.title}</h4> <h4>Genre: {movie.genre}</h4> 
            <br></br>
            <form>
                <select>
                    <option disabled-value="select-screen" >Select Screen</option>
                    {screensOptions}
                </select>
                <button class="add-movie-button" type="submit">Add Movie to screen</button>
                <br></br>
                <button class ="delete-movie-button" onClick= {handleDeleteMovie}>Delete Movie</button>
            </form>
            </div>

        </>
    );
}


export default MovieListComponent;

