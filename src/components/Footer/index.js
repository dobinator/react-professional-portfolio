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
            <i className="fa fa-envelope"></i>
            <a href="mailto:dobsonemily@gmail.com"></a>
          </h2>
          </div>
          <div className= "column">
          <h2 className="is-size-3" style={{ color: "white" }}>
            <i className="fa fa-github"></i>
            <a href="https://github.com/dobinator/digital_portfolio"></a>
          </h2>
           </div>
           <div className= "column">
          <h2 className="is-size-3" style={{ color: "white", padding: "20px"}}>
            <i className="fa fa-linkedin-square"></i>
            <a href="https://www.linkedin.com/in/emily-dobson-412a5534"></a>
          </h2>
          </div>
          <div className= "column">
          <h2 className="is-size-3" style={{ color: "white"}}>
          <i className="fas fa-mobile"></i>
          <a href="tel:+4106936440"></a>
          </h2>
          </div>
        </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
