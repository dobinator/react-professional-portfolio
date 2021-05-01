import React from "react";

function Footer() {
  return (
    <section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p><strong>Contact Me</strong></p>
        </div>
        <div style= {{border: "rgb(128, 0, 17) 2px solid"}}>
            <ul>
                <li>
              <h2 className="is-size-4" href="mailto:dobsonemily@gmail.com"></h2>
                <i className="fa fa-envelope" ></i>
                </li>
                <li>
              <h2 className="is-size-4" href="https://github.com/dobinator/digital_portfolio"></h2>
                <i className="fa fa-github"></i>
                </li>
                <li>
              <h2 className="is-size-4" href="https://www.linkedin.com/in/emily-dobson-412a5534"></h2>
                <i className="fa fa-linkedin-square"></i>
               </li>
            </ul>
        </div>
      </footer>
    </section>
  );
}

export default Footer;