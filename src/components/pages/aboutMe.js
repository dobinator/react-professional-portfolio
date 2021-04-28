import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function aboutMe() {
    return (

    <section className="hero">
        <div className="hero-body">
          <p className="title">Hi</p>
          <p className="subtitle">I'm Emily</p>
        </div>
        <figure className="image is-48x48">
                <img src="images/circle photo (1).jpg" alt="Placeholder image"/>
        </figure>

        <div>
          <p>
            I'm a creative individual who has recently just started her Coding
            journey. I love to explore various art forms, from knitting (which is
            the first form of coding!), felting, and photography. You can find
            me often in a local thrift store snagging all the cool stuff to
            decorate my house.
          </p>
        </div>
        <h2>Ravelry</h2>
         <Link>
          <iframe src="https://giphy.com/embed/eXIceeqXgUmTuDu7KQ" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
         <p><a href="https://giphy.com/gifs/eXIceeqXgUmTuDu7KQ">via GIPHY</a></p></Link>

        <h2>Instagram</h2>
         <Link href= "https://www.instagram.com/emily.felts.good/"></Link>

        <h2>Photography</h2>
         <Link href= "#"></Link>

         </section>
    )
}

export default aboutMe; 
