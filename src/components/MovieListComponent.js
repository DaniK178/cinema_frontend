
const MovieListComponent = ({movie}) => {

    return (
    
        <li> CinemaBranch: {movie.cinema.id}, Title:{movie.title}, Genre {movie.genre} </li>
    );
}


export default MovieListComponent;