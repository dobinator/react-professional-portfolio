import React from "react";


const styles = {
  title: {
    margin: "auto",
    width: "50%",
    fontSize: "40px",
    color: "#dcd0ff",
  },
  subtitle: {
    margin: "auto",
    width: "40%",
    fontSize: "24px",
    color: "#E1CE00",
  },
  intro: {
    padding: "10px",
    textAlign: "left",
    fontSize: "18px",
    color: "white",
  },
};

function AboutMe() {
  return (
    <div className="section is-small">
      <div className="container">
        <p style={styles.title}>Hi,</p>
        <p style={styles.subtitle}>I'm Emily</p>
        <figure className="image" style={{ width: "25%", height: "auto" }}>
          <img src="./images/circle.png" alt="Emily Dobson" />
        </figure>

        <div>
          <div>
            <p style={styles.intro}>
              I'm a creative individual who has recently started my Coding
              journey.<br></br>Prior to learning code, I was a high school art
              teacher for 15 years and taught almost every art medium/ media(
              from Computer Graphics to Introduction to Art to AP Studio)...I
              have both a Bachelors degree in Fine Art and a Master's degree in
              Art. My speciality was photography- fascinated by all that analog
              technology.
              <br></br>
              <br></br>
              I enjoy exploring various art forms, from knitting (which is the
              first form of coding!), felting, and photography. I taught myself 
              how to knit from reading books and have tackled intarsia, cables, and 
              slowly treading into brioche. This year I made everyone in my family a hat for the holiday season. 
              You can find me often in a local thrift store snagging all the cool stuff to
              decorate my house.
                <br></br>
                <br></br>
              <a href= "images/resume.pdf" download><p style={{color: "#48d1cc"}}>link to my Resume</p></a>
            </p>
          </div>
        </div>
      </div>

      <div className="section is-medium">
        <div className="container">
          <div className="columns">
            <div className="column">
              <p className="is-size-4" style={{ color: "white" }}>
                <i className="fab fa-ravelry"></i>Ravelry
              </p>
              <br></br>
              <iframe title="This is a unique title" 
                src="https://giphy.com/embed/eXIceeqXgUmTuDu7KQ"
                width="480"
                height="270"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
              ></iframe>
              <p>
                <a href="https://giphy.com/gifs/eXIceeqXgUmTuDu7KQ">
                  via GIPHY
                </a>
              </p>
            </div>
            <div className="column">
              <p className="is-size-4" style={{ color: "white" }}>
                <i className="fab fa-flickr"></i>Flickr
              </p>
              <a
                data-flickr-embed="true"
                href="https://www.flickr.com/photos/192850403@N05"
              >
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
                charSet="utf-8"
              ></script>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
