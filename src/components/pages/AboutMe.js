import React from "react";
import { section } from "react-bulma-components"
const styles ={
title: {
  "margin": "auto",
  "width": "50%",
  "fontSize": "38px"
}, 
subtitle: {
  "margin": "auto",
  "width": "40%",
  "fontSize": "24px"
},
intro:{
  "textAlign": "right",
  "fontSize": "15px"
},
}

function AboutMe() {
  return (
    <section class="section is-large">
      <div class="container">
          <p style={styles.title}>Hi</p>
          <p style={styles.subtitle}>I'm Emily</p>

      <figure className="image" style= {{width: "25%", height: "auto"}}>
        <img src="./images/circle.png" alt= "Emily Dobson"/>
      </figure>

      <div>
        <p style= {styles.intro}>
          I'm a creative individual who has recently just started my Coding
          journey.<br>
          </br>Prior to learning code, I was a high school art teacher and taught almost every art medium/ media...I love to explore various art forms, from knitting (which is
          the first form of coding!), felting, and photography. You can find me
          often in a local thrift store snagging all the cool stuff to decorate
          my house. </p>
      </div>
      </div> 
      <div class="container">
        <div className= "columns">
          <div className= "column">
      <p className="is-size-4"><i className="fab fa-ravelry"></i>Ravelry</p>
      <br></br>
      <iframe
        src="https://giphy.com/embed/eXIceeqXgUmTuDu7KQ"
        width="480"
        height="270"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen></iframe>
      <p>
        <a href="https://giphy.com/gifs/eXIceeqXgUmTuDu7KQ">via GIPHY</a>
      </p>
    </div>
    </div>


    <div className= "column">
    <p className ="is-size-4"><i className="fab fa-instagram"></i>Instagram</p>
      <a href={"https://www.instagram.com/emily.felts.good/"}></a>
      <figure style= {{width: "50%", height: "auto"}}>
        <img src= "./images/insta.PNG" alt= "landing page on instgram account"/>
      </figure>
      </div>

      <div className= "column"> 
      <p className="is-size-4"><i className="fab fa-flickr"></i>Flickr</p>
      <a
        data-flickr-embed="true"
        href="https://www.flickr.com/photos/192850403@N05">
        <img
          src="https://live.staticflickr.com/65535/51145326896_9e757993ba.jpg"
          width="300"
          height="400"
          alt="Flickr"
          />
      </a>
      <script
        async
        src="//embedr.flickr.com/assets/client-code.js"
        charSet="utf-8"></script>
        </div>
</div>
</section>
   
  );
}

export default AboutMe;


<section class="section is-large">
  <h1 class="title">Large section</h1>
  <h2 class="subtitle">
    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
  </h2>
</section>