import { useState, React} from "react"
import { useParams } from "react-router-dom"
import MovieListComponent from "./MovieListComponent"
import ScreenListItem from "./ScreenListItem"



const CinemaComponent = ({postScreen, cinemas, cinemaScreens, postMovie}) => {
    
    const [stateScreen, setStateScreen] = useState({
        capacity: 0
     })

    //  const [stateMovie, setStateMovie] = useState({
    //     genre: "",
    //     length: 0,
    //     releaseDate: 0,
    //     title: ""
    //  })



    const {id}= useParams()
    const cinema = cinemas.find((cinema)=> {
        const cinemaId = parseInt(id)
        return cinemaId === cinema.id; 
    })   

    const movieListItems = cinema.movies.map((movie) => {
        return <MovieListComponent movie={movie} />
    })

    //SCREEN METHODS

    const handleScreenChange = (event) => {
        let screenCapacity = event.target.name;
        let copiedScreen = {... stateScreen}
        copiedScreen[screenCapacity] = event.target.value;
        setStateScreen(copiedScreen);
    }

    const handlePostScreen = (event) => {
        event.preventDefault()
        postScreen(stateScreen, cinema.id)
    }

    
    const screenListItems = cinemaScreens.map((screen, index)=> {
    if(screen.cinema.id === cinema.id) {return <ScreenListItem 
            screen={screen} 
            key = {index}/>      
        }} )

        // //MOVIE METHODS

        // const handleMovieChange = (event) => {
        //     let movieProperty= event.target.name;
    
        //     let copiedMovie = {... stateMovie}
        //     copiedMovie[movieProperty] = event.target.value;
        //     setStateMovie(copiedMovie);
        // }
    
        // const handlePostMovie = (event) => {
        //     event.preventDefault()
        //     postMovie(stateMovie, cinemaURL.id)
        // }
    
        
        // const movieListItems = movies.map((movie, index)=> {
        // if(movie.cinema.id === cinemaURL.id) {return <MovieListComponent 
        //         movie={movie} 
        //         key = {index}/>      
        //     }} )  





   

    return(
        <>

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

        <h3>Current Movies Being Shown</h3>

        <ol>
        {movieListItems}
        </ol>


        {/* <h3>Current Movies Being Shown</h3>

        <ol>
        {movieListItems}
        </ol>


        <form onSubmit={handlePostMovie}>
            <h3>Add a new Movie</h3>
            <label htmlFor="enter Genre"> Enter Genre:</label>
            <input
                type="text"
                placeholder="Enter Genre"
                name="genre"
                onChange={handleMovieChange}
                value={stateMovie.genre}
            />
            <label htmlFor="enter length">Enter length:</label>
            <input
                type="text"
                placeholder="Enter Length"
                name="length"
                onChange={handleMovieChange}
                value={stateMovie.length}
            />
             <label htmlFor="enter releaseDate">Enter Release Date:</label>
            <input
                type="text"
                placeholder="Enter Release Date"
                name="releaseDate"
                onChange={handleMovieChange}
                value={stateMovie.releaseDate}
            />
             <label htmlFor="enter title">Enter Title:</label>
            <input
                type="text"
                placeholder="Enter Title"
                name="title"
                onChange={handleMovieChange}
                value={stateMovie.title}
            />
            <button type="submit">Submit</button>
        </form> */}

        </>
        
    )
}
export default CinemaComponent;