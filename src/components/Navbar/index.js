import React from "react";
import { Link, useLocation } from "react-router-dom";

// function(){
// var burger= document.querySelector('.burger');
// var nav = document.querySelector('#', burger.dataset.target);
// burger.addEventListener('click', function(){
//   burger.classList.toggle('is-active')
//   nav.classList.toggle('is-active')
// });
// }

function Navbar() {
  const location = useLocation();

  return (
    <nav
      className="navbar"
      style={{ backgroundColor: "#414a4c", border: "2px solid white" }}
      role="navigation"
    >
      <div className="navbar-brand">
        <p className="navbar-item">
          <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
            style={{ color: "#48d1cc", fontSize: "40px" }}
          >
            Emily Dobson
          </Link>
        </p>

        <div className="navbar-burger" data target="navMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">

            <Link
              to="/about"
              className={
                location.pathname === "/about" ? "nav-link active" : "nav-link"
              }
              style={{ color: "white", fontSize: "18px" }}
            >
              About Me
            </Link>

          <div className="navbar-item">
            <Link to="/portfolio" style={{ color: "white", fontSize: "18px" }}>
              Portfolio
            </Link>
          </div>

          <Link
            to="/resume"
            className={
              location.pathname === "/about" ? "nav-link active" : "nav-link"
            }
            style={{ color: "white", fontSize: "18px" }}
          >
            Resume
          </Link>

    
        <div className="navbar-item">
          <Link to="/Footer" style={{ color: "white", fontSize: "18px" }}>
            Contact
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="is-size-4">
                <Link href="mailto:dobsonemily@gmail.com">
                  <i
                    className="fa fa-envelope-o"
                    style={{ color: "white" }}
                  ></i>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
