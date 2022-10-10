import { useEffect, useState } from "react"


const CinemaContainer = () => {

    const [cinemas,setCinemas] = useState([])

    const fetchCinemas = async () => {

        const response = await fetch("http://localhost:8080/cinemas");
        const jsonCinemas = await response.json();

        setCinemas(jsonCinemas);

    }

    useEffect(() => {
        fetchCinemas();
    }, [])



}

export default CinemaContainer;