

const ScreeningListItemComponent = ({screening}) => {

    return (
        <li>{screening.movie.title}, Length:{screening.movie.length} mins</li>
    )


};

export default ScreeningListItemComponent; 