import { useEffect, useState } from "react"
import CinemaListComponent from "../components/CinemaListComponent"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CinemaComponent from "../components/CinemaComponent";
import MovieComponent from "../components/MovieComponent";
import CustomerComponent from "../components/CustomerComponent";


const CinemaContainer = () => {

    const [cinemas,setCinemas] = useState([])
    const [movies, setMovies] = useState([])
    const [screens, setScreens] = useState([])
    const [customers, setCustomers] = useState([])
    const [screenings, setScreenings] = useState([])


    const fetchCinemas = async () => {
        const response = await fetch("http://localhost:8080/cinemas");
        const jsonCinemas = await response.json();
        setCinemas(jsonCinemas);

    }

    useEffect(() => {
        fetchCinemas();
    }, [])

    const postChocolate = async (newChocolate) => {
        const response = await fetch("http://localhost:8080/chocolates", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newChocolate)
        })
        const savedChocolate = await response.json()
        setChocolates([...chocolates, savedChocolate]) 

const cinemaOptionsList = () => {
    const cinemaOptions = cinemas.map((cinema) => {
        return (<>
            key={cinema.id} cinema={cinema}
            </>) 
    })

    return (
        <>
        <h3>Please select your cinema</h3>
        <select
            name="cinemas"
            defaultValue="select-cinema">
                <option disabled-value="select-cinema">Select a cinema</option>
            {cinemaOptions}
            </select>
       
        </>
    )
}


    return (
        <BrowserRouter>

        <ul>

          <li> <Link to='/'> Home </Link> </li>
          <li> <Link to='/cinemas'> Cinemas </Link> </li>
          <li> <Link to='/cinemas/:id/movies'> Movies </Link> </li>
          <li> <Link to='/customers'> Customers </Link> </li>

            
        </ul>

        <Routes>
            {/* <Route path= "/cinema/:id" element={
                <CinemaListComponent cinemas = {cinemas} />
            }/> */}
            <Route path ='/' element={<CinemaContainer />}/>
            <Route path ="/cinemas" element={<CinemaComponent/>}/>
            <Route path ='/cinemas/:id/movies' element={<MovieComponent/>}/>
            <Route path ='/customers' element={<CustomerComponent/>}/>

        </Routes>
         
        </BrowserRouter>
        
    )


    



}

export default CinemaContainer;