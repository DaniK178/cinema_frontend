import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CinemaComponent from "../components/CinemaComponent";
import HomeComponent from "../components/HomeComponent";
import Footer from "../components/Footer";


const CinemaContainer = () => {

    const [cinemas, setCinemas] = useState([])
    const [movies, setMovies] = useState([])
    const [screens, setScreens] = useState([])
    const [selectedScreen, setSelectedScreen] = useState(null)


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

    const selectScreen = (screen) => {
        setSelectedScreen(screen);
    }

    //MOVIE METHODS
    const postMovie = async (newMovie, id) => {

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
    }


    const fetchMovies = async (id) => {
        const response = await fetch(`http://localhost:8080/cinemas/${id}/movies`,);
        const jsonMovies = await response.json();
        setMovies([...jsonMovies]);
    }

    const deleteMovie = async (id, movieId) => {
        console.log(id);
        console.log(movieId);
        await fetch(`http://localhost:8080/cinemas/${id}/movies/${movieId}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        });
        await fetchCinemas();
    }


    useEffect(() => {
        fetchCinemas()
        fetchScreen()
    }, []);


    return (
        <body>
            <>
                <BrowserRouter>

                    <header>
                        <nav>
                            <ul>
                                <li> <Link to='/'> Home </Link> </li>
                                <li> <Link to='/cinemas/:id'> Cinemas </Link> </li>
                                <li> <Link to='/cinemas/:id/movies'> Movies </Link> </li>
                                <li> <Link to='/customers'> Customers </Link> </li>
                            </ul>
                        </nav>
                        <h1>Welcome to BrightChain Cinema Mangement System</h1>
                    </header>
                    <main>
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
                                    selectScreen={selectScreen}
                                    deleteMovie={deleteMovie}
                                    selectedScreen={selectedScreen}
                                />
                            } />

                        </Routes>
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </BrowserRouter>
            </>
        </body>
    )
}


export default CinemaContainer;