const HomeComponent = ({cinemas}) => {

        const cinemaOptions = cinemas.map((cinema) => {
        return <>
        <option value={cinema.id}>{cinema.branch}</option>
        </>

        
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

export default HomeComponent