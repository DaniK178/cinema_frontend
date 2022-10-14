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
        </div>

        {/* <div className ="CotM-images">  */}

            <div className="cinema-employees">
                 <img src= "https://i2-prod.plymouthherald.co.uk/incoming/article1614539.ece/ALTERNATES/s1227b/PLPC20180525F-012_CJPG.jpg" alt="Image of cinema employees" ></img>
            </div>
        
            <div className="cinema-image">
                <img  src= "https://www.shropshirestar.com/resizer/XpzgV5hQLnbfAlKXsY_S1X9OmUA=/1200x0/cloudfront-us-east-1.images.arcpublishing.com/mna/IHDP6JZUCRDX3EBLMPE5SQRSQI.jpg" alt="Image of cinema" ></img>
            </div>

            <div className="film-festival"> 
                <img  src= " https://raindance.org/wp-content/uploads/2021/11/festivals.jpeg" alt="film festival"></img>
            </div>

            <div className="film-poster"> 
                <img  src= " https://previews.123rf.com/images/pimonova/pimonova1407/pimonova140700032/30510191-movie-cinema-festival-poster-vector-background-with-hand-drawn-sketch-illustrations.jpg" alt="film festival"></img>
            </div>





       
        {/* </div> */}
        </section>
        
        </>
       
        
    )


}
export default CinemaOfTheMonth