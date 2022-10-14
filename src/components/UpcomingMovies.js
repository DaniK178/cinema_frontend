const UpcomingMovies = () => {

    return (
        <>
        <h2>Upcoming movies!</h2>
        <br />   
        <div className="upcomingMovies">   
      
            <div>
               <img 
                    src="../Photos/Alien.png"
                    alt="Alien frame"
                    width="80%"
                />
                <h3>Alien</h3>
            </div>
            <div>
               <img 
                src="../Photos/ToyStory.png"
                alt="Toy Story frame"
                width="80%"
                /> 
                <h3>Toy Story</h3>
            </div>
            <div>
                <img 
                src="../Photos/BlairWitchProject.png"
                alt="The Blair Witch Project frame"
                width="80%"
                />
                <h3>The Blair Witch Project</h3>  
            </div>
        </div>
        </>
    )
}

export default UpcomingMovies;