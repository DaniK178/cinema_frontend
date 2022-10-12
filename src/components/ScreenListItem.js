const ScreenListItem = ({screen, selectScreen}) => {

    const handleClick = () => {
        selectScreen(screen);
    }

    return (
    
        <li>Screen capacity:{screen.capacity} 
        <br />
        <button onClick={handleClick}>Select screen</button>
        
        </li>
    );
}

export default ScreenListItem;