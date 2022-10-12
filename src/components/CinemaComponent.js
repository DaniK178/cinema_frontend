import { useState, React } from "react"
import { useParams } from "react-router-dom"
import MovieListComponent from "./MovieListComponent"
import ScreenListItem from "./ScreenListItem"



const CinemaComponent = ({ postScreen, cinemas, cinemaScreens, postMovie, selectScreen, postMovieToScreen }) => {

    const [stateScreen, setStateScreen] = useState({
        capacity: 0
    })

    const { id } = useParams()
    const cinema = cinemas.find((cinema) => {
        const cinemaId = parseInt(id)
        return cinemaId === cinema.id;
    })

    // const movieListItems = cinema.movies.map((movie) => {
    //     return <MovieListComponent movie={movie} />
    // })

    //SCREEN METHODS

    const handleScreenChange = (event) => {
        let screenCapacity = event.target.name;
        let copiedScreen = { ...stateScreen }
        copiedScreen[screenCapacity] = event.target.value;
        setStateScreen(copiedScreen);
    }

    const handlePostScreen = (event) => {
        event.preventDefault()
        postScreen(stateScreen, cinema.id)
    }


    const screenListItems = cinemaScreens.map((screen, index) => {
        if (screen.cinema.id === cinema.id) {
            return <ScreenListItem
                screen={screen}
                key={index}
                selectScreen={selectScreen} 
            
                />
        }
    })

    //MOVIE METHODS

    const [stateMovie, setStateMovie] = useState({
        genre: "",
        length: 0,
        releaseDate: 0,
        title: ""
    })

    const handleMovieChange = (event) => {
        let movieProperty = event.target.name;
        let copiedMovie = { ...stateMovie }
        copiedMovie[movieProperty] = event.target.value;
        setStateMovie(copiedMovie);
    }

    const handlePostMovie = (event) => {
        event.preventDefault()
        postMovie(stateMovie, id)
    }


    return (
        <>

            {/* form to add a screen */}

            <h3>Current number of Screens</h3>

            <ol>
                {screenListItems}
            </ol>


            <form onSubmit={handlePostScreen}>
                <h3>Add a new Screen</h3>
                <label htmlFor="screen capacity">Enter Screen Capacity:</label>
                <input
                    type="text"
                    placeholder="Enter Screen Capacity"
                    name="capacity"
                    onChange={handleScreenChange}
                    value={stateScreen.capacity}
                />
                <button type="submit">Submit</button>
            </form>


            {/* Form to add a movie */}

            <h3>Current Movies Being Shown</h3>

            <ol>
                {cinema.movies.map((movie) => {
                    return <MovieListComponent 
                    movie={movie}
                    screens={cinemaScreens}
                    cinemas ={cinemas}
                    postMovieToScreen ={postScreeningToScreen} />
                })} 

                {/* {movieListItems} */}
            </ol>

            <form onSubmit={handlePostMovie}>
                <h3>Add a new Movie</h3>
                <label htmlFor="enter Genre"> Enter Genre:</label>
                <input
                    type="text"
                    placeholder="Enter Genre"
                    name="genre"
                    onChange={handleMovieChange}
                    value={cinema.movies.genre}
                />
                <label htmlFor="enter length">Enter length:</label>
                <input
                    type="text"
                    placeholder="Enter Length"
                    name="length"
                    onChange={handleMovieChange}
                    value={cinema.movies.runTime}
                />
                <label htmlFor="enter releaseDate">Enter Release Date:</label>
                <input
                    type="text"
                    placeholder="Enter Release Date"
                    name="releaseDate"
                    onChange={handleMovieChange}
                    value={cinema.movies.releaseDate}
                />
                <label htmlFor="enter title">Enter Title:</label>
                <input
                    type="text"
                    placeholder="Enter Title"
                    name="title"
                    onChange={handleMovieChange}
                    value={cinema.movies.title}
                />
                <button type="submit">Submit</button>
            </form>

        </>

    )
}
export default CinemaComponent;