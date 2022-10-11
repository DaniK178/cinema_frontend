const ScreenListItem = ({screen}) => {

    return (
    
        <li> CinemaBranch: {screen.cinema.id}, Screen capacity:{screen.capacity} 
        
        </li>
    );
}

export default ScreenListItem;