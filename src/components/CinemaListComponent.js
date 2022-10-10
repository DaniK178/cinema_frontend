import CinemaComponent from "./CinemaComponent";


const CinemaListComponent = ({cinemas}) => {

    const cinemaOptions = cinemas.map((cinema) => {
        return <CinemaComponent 
            key={cinema.id}
            cinema={cinema.branch}
            //selectCinema={selectCinema} 
            />
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

export default CinemaListComponent; 