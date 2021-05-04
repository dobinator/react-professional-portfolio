import React from "react";

function Footer() {
  return (
    <section>
      <footer
        className="footer"
        style={{ backgroundColor:  "#414a4c", paddingLeft: "20px"}}
      >
        <div className="content">
          <p className="title is-4" style={{ color: "white", borderTop:"3px solid #9457eb", textAlign: "center"}}>
            <strong>Contact Me</strong>
          </p>
        <div className= "columns">
          <div className= "column">
          <h2 className="is-size-3">
             <a href="mailto:dobsonemily@gmail.com"><i className="fa fa-envelope"style={{ color: "white" }}></i></a>
          </h2>
          </div>
          <div className= "column">
          <h2 className="is-size-3">
           <a href="https://github.com/dobinator"><i className="fa fa-github"style={{ color: "white" }}></i></a>
          </h2>
           </div>
           <div className= "column">
          <h2 className="is-size-3">
          <a href="https://www.linkedin.com/in/emily-dobson-412a5534/"><i className="fa fa-linkedin-square"style={{ color: "white" }}></i></a>
          </h2>
          </div>
          <div className= "column">
          <h2 className="is-size-3">
         <a href="tel:+4106936440"><i className="fas fa-mobile"style={{ color: "white"}}></i></a>
          </h2>
          </div>
        </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
