import React from "react";

function Footer() {
  return (
    <section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p><strong>Contact Me</strong></p>
        </div>
        <div className="content">
            <ul>
                <li>
              <a href="mailto:dobsonemily@gmail.com"></a>
                <i className="fa fa-envelope"></i>
                </li>
                <li>
              <a href="https://github.com/dobinator/digital_portfolio"></a>
                <i className="fa fa-github"></i>
                </li>
                <li>
              <a href="https://www.linkedin.com/in/emily-dobson-412a5534"></a>
                <i className="fa fa-linkedin-square"></i>
               </li>
            </ul>
        </div>
      </footer>
    </section>
  );
}

export default Footer;