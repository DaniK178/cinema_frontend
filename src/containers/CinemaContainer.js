import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CinemaComponent from "../components/CinemaComponent";
import MovieComponent from "../components/MovieComponent";
import CustomerComponent from "../components/CustomerComponent";
import HomeComponent from "../components/HomeComponent";


const CinemaContainer = () => {

    const [cinemas,setCinemas] = useState([])
    const [movies, setMovies] = useState([])
    const [screens, setScreens] = useState([])
    const [customers, setCustomers] = useState([])
    const [screenings, setScreenings] = useState([])
    const [cinemaScreens, setCinemaScreens] = useState([])


    const fetchCinemas = async () => {
        const response = await fetch("http://localhost:8080/cinemas");
        const jsonCinemas = await response.json();
        setCinemas(jsonCinemas);

    }

    useEffect(() => {
        fetchCinemas();
    }, [])

    const postScreen = async (newScreen, id) => {

        // add to database

        const response = await fetch(`http://localhost:8080/cinemas/${id}/screens`,{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newScreen)
        })

    // update locally ? 
        
        const responseCinema = await response.json()
        setScreens([...responseCinema.screens])
    } 

// const getScreensByCinema = (id) => {
//     cinemas.map((cinema) => {
//         screens.map()
//     })

// }

    const fetchScreen = async () => {
        const response = await fetch("http://localhost:8080/screens");
        const jsonScreens = await response.json();
        
        setCinemaScreens(jsonScreens);

    }

    useEffect(() => {
        fetchScreen();
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
            <Route path ='/' element={<HomeComponent 
            
             cinemas={cinemas}/>}/>
            <Route path ="/cinemas/:id" element={<CinemaComponent
                postScreen={postScreen} 
                cinemas={cinemas}
                fetchScreen={fetchScreen}/>}/>
            <Route path ='/cinemas/:id/movies' element={<MovieComponent/>}/>
            <Route path ='/customers' element={<CustomerComponent/>}/>

        </Routes>
         
        </BrowserRouter>
        
    )


    



}


export default CinemaContainer;