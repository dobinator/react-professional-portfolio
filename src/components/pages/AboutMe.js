import React from "react";
// import circle photo from "./images/circle photo.jpg"

function AboutMe() {
  return (
    <section>
      <div>
        <p className="title">Hi</p>
        <p className="subtitle">I'm Emily</p>
      </div>
      <figure className="image is-48x48">
        <img src="images/circle photo (1).jpg" alt="photo of Emily Dobson" />
      </figure>

      <div>
        <p>
          I'm a creative individual who has recently just started my Coding
          journey. I love to explore various art forms, from knitting (which is
          the first form of coding!), felting, and photography. You can find me
          often in a local thrift store snagging all the cool stuff to decorate
          my house.
        </p>
      </div>
      <h2>Ravelry</h2>
      <i className="fab fa-ravelry"></i>

      <iframe
        src="https://giphy.com/embed/eXIceeqXgUmTuDu7KQ"
        width="480"
        height="270"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/eXIceeqXgUmTuDu7KQ">via GIPHY</a>
      </p>

      <h2>Instagram</h2>
      <i className="fab fa-instagram"></i>
      <a href="https://www.instagram.com/emily.felts.good/"></a>

      <h2>Photography</h2>
      <i class="fab fa-flickr"></i>

      <a
        data-flickr-embed="true"
        href="https://www.flickr.com/photos/192850403@N05"
      >
        <img
          src="https://live.staticflickr.com/65535/51145326896_9e757993ba.jpg"
          width="640"
          height="480"
          alt="Flickr"
        />
      </a>

      <script
        async
        src="//embedr.flickr.com/assets/client-code.js"
        charset="utf-8"
      ></script>
    </section>
  );
}

export default AboutMe;
