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
          <h2 className="is-size-3" style={{ color: "white"}}>
             <a href="mailto:dobsonemily@gmail.com"><i className="fa fa-envelope"></i></a>
          </h2>
          </div>
          <div className= "column">
          <h2 className="is-size-3" style={{ color: "white" }}>
           <a href="https://github.com/dobinator/digital_portfolio"><i className="fa fa-github"></i></a>
          </h2>
           </div>
           <div className= "column">
          <h2 className="is-size-3" style={{ color: "white", padding: "20px"}}>
          <a href="https://www.linkedin.com/in/emily-dobson-412a5534"><i className="fa fa-linkedin-square"></i></a>
          </h2>
          </div>
          <div className= "column">
          <h2 className="is-size-3" style={{ color: "white"}}>
         <a href="tel:+4106936440"><i className="fas fa-mobile"></i></a>
          </h2>
          </div>
        </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
