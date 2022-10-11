import { useState } from "react"
import { useParams } from "react-router-dom"


const CinemaComponent = ({postScreen, cinemas, screens}) => {

 const {id}= useParams()
 const cinemaURL = cinemas.find((cinema)=> {
    cinema.id = parseInt(id)
    return cinema; 
 })   

 const [stateScreen, setStateScreen] = useState({
    capacity: 0
 })

 const handleChange = (event) => {
    let screenCapacity = event.target.name;

    let copiedScreen = {... stateScreen}
    copiedScreen[screenCapacity] = event.target.value;
    setStateScreen(copiedScreen);
 }

 const handlePostScreen = (event) => {
    event.preventDefault()
    postScreen(stateScreen, cinemaURL.id)
 }
    return(
        <form onSubmit={handlePostScreen}>
            <h3>Add a new Screen</h3>
            <label htmlFor="screen capacity">Enter Screen Capacity:</label>
            <input
                type="text"
                placeholder="Enter Screen Capacity"
                name="capacity"
                onChange={handleChange}
                value={stateScreen.capacity}
            />
            <button type="submit">Submit</button>


        </form>
        
    )
}
export default CinemaComponent;