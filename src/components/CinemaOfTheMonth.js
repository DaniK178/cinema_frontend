const CinemaOfTheMonth = () => {

    return(
        <>
        <hr></hr>

        <h2 id="CotM-title"><span>The Cinema of the Month is:  </span> </h2>
        <h4 id="CotM-winner">Not Vue </h4>
            
        <section className="CinemaOfTheMonth">
        
        <div className="CotM-QandA">
        <h4>What some things you love about your cinema?</h4>
        <p> Our festivals or retrospectives are a huge cinema feast for viewers and for us, as well. 
            We bring to our place a part of that special atmosphere, we invite guests. Festivals are also an opportunity to give prizes and to promote young directors or less known films. During such events we reach new audiences, we talk to our viewers and they can meet people they know from the big screen. That builds up the feeling that they participate in something more important than a regular film screening.</p>
        <h4>What makes your cinema special?</h4>
        <p>we still have the 35mm projector and we run special screenings from time to time. This is the history of cinema and we want to continue to keep that old fashion style. This is the best way to feel the soul and magic of cinema.</p>

        <h4>What are some things we can look forward to at your cinema?</h4>
        <p>More event cinema!</p>
        <p> Live performances from world-class theatre, opera, music and dance to exhilarating sports and gaming events.
            
            Customers will get to ynjoy the best seat in the house with beautifully clear on-screen pictures and breath-taking surround sound. Every performance becomes an unforgettable, larger-than-life experience. 
            </p>
            <p> It will be an exciting experience for employees!</p>


        </div>

        

        {/* <div className ="CotM-images">  */}

            <div className="cinema-employees">
                 <img src= "../Photos/cinema_employees.jpg" alt="Image of cinema employees" ></img>
            </div>
        
            <div className="cinema-image">
                <img  src= "../Photos/cinema_seating.jpg" alt="Image of cinema" ></img>
            </div>

            <div className="film-festival"> 
                <img  src= " ../Photos/cinema-festival.jpeg" alt="film festival"></img>
            </div>

            <div className="film-poster"> 
                <img  src= " ../Photos/Cinema-festival-poster.webp" alt="film festival"></img>
            </div>





       
        {/* </div> */}
        </section>
        
        </>
       
        
    )


}
export default CinemaOfTheMonth