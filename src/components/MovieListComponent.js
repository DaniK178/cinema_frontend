import { useParams } from "react-router-dom"


const MovieListComponent = ({ movie, screens, cinemas, postScreeningToScreen }) => {



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

    // const screenId = screens.map((screen) => {
    //     return screen.id;
    // })

    // screenId, movieId, cinemaId, screeningId
    
    const handlePostScreening = (event) => {
        event.preventDefault()
        console.log(event)
        postMovieToScreen(event.target.value)
    }


     


    return (
        <>
            <li> Title:{movie.title}, Genre {movie.genre} </li>
            <br></br>
            <form onSubmit={handlePostScreening}>
                <select>
                    <option disabled-value="select-screen" >Select Screen</option>
                    {screensOptions}
                </select>
                <button type="submit">Add Movie to screen</button>
            </form>
        </>
    );
}


export default MovieListComponent;