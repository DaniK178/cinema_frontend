import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react";

const HomeComponent = ({cinemas}) => {

    const [selectedCinema, setSelectedCinema] = useState(null);

    const navigate = useNavigate();

    const {id} = useParams();

    const cinemaOptions = cinemas.map((cinema) => {
        return <>
        <option key={cinema.id} value={cinema.id}>{cinema.branch}</option>
        </>
    })

    const handleCinemaNavigation = (event) => {
        event.preventDefault()
        navigate(`/cinemas/${selectedCinema}`)
    }

    return (
        <>
        <h3>Please select your cinema</h3>

        <form onSubmit={handleCinemaNavigation}>
            <select
            name="cinemas"
            onChange={(event) => setSelectedCinema(event.target.value)}
            defaultValue="select-cinema">
                <option disabled-value="select-cinema">Select a cinema</option>
            {cinemaOptions}
            </select>
            <button type="submit">OK</button>
        </form>
        
       
        </>
    )

}

export default HomeComponent