

const ScreeningListItemComponent = ({screening}) => {

    return (
        <li>{screening.movie.title}, {screening.movie.length}</li>
    )


};

export default ScreeningListItemComponent; 