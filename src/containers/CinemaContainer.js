import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CinemaComponent from "../components/CinemaComponent";
import MovieComponent from "../components/MovieComponent";
import CustomerComponent from "../components/CustomerComponent";
import HomeComponent from "../components/HomeComponent";
import ScreenDetailComponent from "../components/ScreenDetailComponent";
import Footer from "../components/Footer";


const CinemaContainer = () => {

    const [cinemas, setCinemas] = useState([])
    const [movies, setMovies] = useState([])
    const [screens, setScreens] = useState([])
    const [customers, setCustomers] = useState([])
    const [screenings, setScreenings] = useState([])
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
        // delete from db
        console.log(id);
        console.log(movieId);
        await fetch(`http://localhost:8080/cinemas/${id}/movies/${movieId}`, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'}
        });
        await fetchCinemas();
        // delete locally
        
       // setMovies(movies.filter(movie => movie.id !== movieId))
    }


    // posting screening to a screen

    // const postMovieToScreen = async (screenId, movieId, cinemaId, screeningId) => {

    //     const response = await fetch (`http://localhost:8080/screens/${screenId}/screening/${screeningId}?movieId=${movieId}&cinemaId=${cinemaId}`)
    //     const jsonScreenings = await response.json();
    //     setScreenings(...screenings,jsonScreenings);


        
    // }



    useEffect(() => {
        fetchCinemas()
        fetchScreen()
       // fetchMovies()
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
                        // postMovieToScreen ={postMovieToScreen}
                        />
                } />

               

                {/* <Route path="/cinemas/:id/movies" element={<MovieComponent
                    cinemas={cinemas}
                    postMovie={postMovie}
                    movies={movies}
                />} /> */}

                <Route path='/customers' element={<CustomerComponent />} />

            </Routes>
            </main>
            <footer>
                <Footer/>
                
            </footer>

            
        </BrowserRouter>
        
        </>
        </body>
    )






}


export default CinemaContainer;