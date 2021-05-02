import React from "react";

function Footer() {
  return (
    <section>
      <footer
        className="footer"
        style={{ backgroundColor:  "#414a4c"}}
      >
        <div className="content has-text-centered">
          <p className="title is-4" style={{ color: "white", borderTop:"3px solid white"}}>
            <strong>Contact Me</strong>
          </p>
          <h2 className="is-size-3" style={{ color: "white" }}>
            <i className="fa fa-envelope"></i>
            <a href={"mailto:dobsonemily@gmail.com"}></a>
          </h2>

          <h2 className="is-size-3" style={{ color: "white" }}>
            <i className="fa fa-github"></i>
            <a href={"https://github.com/dobinator/digital_portfolio"}></a>
          </h2>

          <h2 className="is-size-3" style={{ color: "white" }}>
            <i className="fa fa-linkedin-square"></i>
            <a href={"https://www.linkedin.com/in/emily-dobson-412a5534"}></a>
          </h2>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
