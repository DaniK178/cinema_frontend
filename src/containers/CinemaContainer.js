import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CinemaComponent from "../components/CinemaComponent";
import MovieComponent from "../components/MovieComponent";
import CustomerComponent from "../components/CustomerComponent";
import HomeComponent from "../components/HomeComponent";


const CinemaContainer = () => {

    const [cinemas, setCinemas] = useState([])
    const [movies, setMovies] = useState([])
    const [screens, setScreens] = useState([])
    const [customers, setCustomers] = useState([])
    const [screenings, setScreenings] = useState([])


    const fetchCinemas = async () => {
        const response = await fetch("http://localhost:8080/cinemas");
        const jsonCinemas = await response.json();
        setCinemas(jsonCinemas);

    }

    // SCREEN METHODS

    const postScreen = async (newScreen, id) => {

        const response = await fetch(`http://localhost:8080/cinemas/${id}/screens`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newScreen)
        })

        const responseCinema = await response.json()
        await fetchScreen()


    }
    const fetchScreen = async () => {
        const response = await fetch("http://localhost:8080/screens");
        const jsonScreens = await response.json();

        setScreens(jsonScreens);
    }

    //MOVIE METHODS
    const postMovie = async (newMovie, id) => {

        console.log(id);

        const response = await fetch(`http://localhost:8080/cinemas/${id}/movies`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newMovie)
        })

        const responseCinema = await response.json()
        const cinemaIndex = cinemas.findIndex(cinema => cinema.id === responseCinema.id)
        let newCinemas = cinemas
        newCinemas[cinemaIndex] = responseCinema
        setCinemas([...newCinemas])
        // setMovies(responseCinema.movies)
        // await fetchMovies()


    }
    const fetchMovies = async (id) => {
        console.log(id);
        const response = await fetch(`http://localhost:8080/cinemas/${id}/movies`,);
        const jsonMovies = await response.json();
        setMovies(jsonMovies);
    }



    useEffect(() => {
        fetchCinemas()
        fetchScreen()
        fetchMovies()
    }, [])


    return (

        <BrowserRouter>

            <ul>

                <li> <Link to='/'> Home </Link> </li>
                <li> <Link to='/cinemas/:id'> Cinemas </Link> </li>
                <li> <Link to='/cinemas/:id/movies'> Movies </Link> </li>
                <li> <Link to='/customers'> Customers </Link> </li>


            </ul>


            <Routes>
                <Route path='/' element={
                    <HomeComponent
                        cinemas={cinemas} />} />
                <Route path="/cinemas/:id" element={
                    <CinemaComponent
                        postScreen={postScreen}
                        cinemas={cinemas}
                        cinemaScreens={screens}
                        fetchScreen={fetchScreen}
                        postMovie={postMovie}
                        movies={movies}

                    />
                } />
                {/* <Route path="/cinemas/:id/movies" element={<MovieComponent
                    cinemas={cinemas}
                    postMovie={postMovie}
                    movies={movies}
                />} /> */}
                <Route path='/customers' element={<CustomerComponent />} />

            </Routes>

        </BrowserRouter>

    )






}


export default CinemaContainer;