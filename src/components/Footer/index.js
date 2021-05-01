import React from "react";

function Footer() {
  return (
    <section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p className= "title is-4"><strong>Contact Me</strong></p>
        <div style= {{border: "rgb(128, 0, 17) 2px solid"}}>
              <h2 className="is-size-3"> 
                <i className="fa fa-envelope" ></i>
              <a href={"mailto:dobsonemily@gmail.com"}></a>
              </h2>

              <h2 className="is-size-3" >
                <i className="fa fa-github"></i>
                <a href={"https://github.com/dobinator/digital_portfolio"}></a>
                </h2>

              <h2 className="is-size-3">
                <i className="fa fa-linkedin-square"></i>
                <a href={"https://www.linkedin.com/in/emily-dobson-412a5534"}></a>
                </h2>
            </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;