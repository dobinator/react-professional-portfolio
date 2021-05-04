import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  function toggleBurgerMenu() {
    document.querySelector(".navbar-menu").classList.toggle("is-active");
  }
  return (
    <nav className="navbar" style={{ backgroundColor: "#414a4c", border: "2px solid white" }}
    role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/"  style={{ color: "#48d1cc", fontSize: "40px" }}
        className="navbar-item">
        Emily Dobson
        </Link>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasic"
          onClick={toggleBurgerMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasic" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/about" className="navbar-item" 
           style={{ color: "white", fontSize: "18px" }}onClick={toggleBurgerMenu}>
            About Me
          </Link>
          <Link
            to="/"
            style={{ color: "white", fontSize: "18px"}}
            className="navbar-item"
            onClick={toggleBurgerMenu}
          >
          Portfolio
          </Link>

          <Link className="navbar-item" onClick={toggleBurgerMenu}>
          <a href="mailto:dobsonemily@gmail.com"style={{ color: "white", fontSize: "18px" }}>
            Contact </a>
            </Link> 


            <Link className="navbar-item"  style={{ color: "white", fontSize: "18px" }}onClick={toggleBurgerMenu}>   
           <a href= "./images/resume_pdf.pdf">
            Resume
          </a>
          </Link>
        </div>
      </div>
    </nav>
  
  );
}

export default Navbar;
