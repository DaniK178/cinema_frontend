import { useState, React} from "react"

import { useParams } from "react-router-dom"
import ScreenListItem from "./ScreenListItem"



const CinemaComponent = ({postScreen, cinemas, screens, fetchScreen, cinemaScreens}) => {

//this will reload the page automatically, when called on add a new screen button 
 const refreshPage = () => window.location.reload(false);

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

 const fetchScreens = fetchScreen;

// display the screens - using the fetch and a filter
// that match the cinema in the url 
// and we want to display the screen number along side the capacity

const screenListItems = cinemaScreens.map((screen, index)=> {
   if(screen.cinema.id === cinemaURL.id) {return <ScreenListItem 
        screen={screen} 
        key = {index}/>
        
}}
)

//if screen.cinema.id === cinemaURL.id




    return(
        <>

        <h3>Current number of Screens</h3>

        <ol>
        {screenListItems}
        </ol>


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
            <button type="submit" onClick={refreshPage}>Submit</button>


        </form>
        </>
        
    )
}
export default CinemaComponent;