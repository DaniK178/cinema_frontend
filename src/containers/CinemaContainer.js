import { useEffect, useState } from "react"
import CinemaListComponent from "../components/CinemaListComponent"


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

    return (
        <>
        
        <CinemaListComponent cinemas = {cinemas} />

        </>
    )


    



}

export default CinemaContainer;