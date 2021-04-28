import React from "react";
import { BrowserRouter as Link } from 'react-router-dom';

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
              <Link href="mailto:dobsonemily@gmail.com"></Link>
                <i className="fa fa-envelope"></i>
                </li>
                <li>
              <Link href="https://github.com/dobinator/digital_portfolio"></Link>
                <i className="fa fa-github"></i>
                </li>
                <li>
              <Link href="https://www.linkedin.com/in/emily-dobson-412a5534"></Link>
                <i className="fa fa-linkedin-square"></i>
               </li>
            </ul>
        </div>
      </footer>
    </section>
  );
}

export default Footer;