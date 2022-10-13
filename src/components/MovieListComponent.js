import { useParams } from "react-router-dom"
import "./MovieListComponent.css"



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
        console.log("movie in delete method: " + JSON.stringify(movie));
        console.log("cinema...: " + JSON.stringify(cinema));
        deleteMovie(cinema.id, movie.id);
    } 

    return (
        <>
        <section className="movieList">
            <div className="listItems">
            <li> Title:{movie.title}, Genre {movie.genre} </li>
            </div>
            <br></br>
            <form>
                <select>
                    <option disabled-value="select-screen" >Select Screen</option>
                    {screensOptions}
                </select>
                <button type="submit">Add Movie to screen</button>
                <br></br>
                <button onClick= {handleDeleteMovie}>Delete Movie</button>
            </form>
            </section>

        </>
    );
}


export default MovieListComponent;




    // const screenId = screens.map((screen) => {
    //     return screen.id;
    // })

    // screenId, movieId, cinemaId, screeningId
    
    // const handlePostScreening = (event) => {
    //     event.preventDefault()
    //     console.log(event)
    //     postMovieToScreen(event.target.value)
    // }
