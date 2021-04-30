import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavbarFont = {
  color: "#7f867b",
};

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar" role="navigation" aria-lable="main navigation">
        <div className="navbar-brand">
          <p className="navbar-item is-size-1" style={NavbarFont}>
            ED
          </p>
          <div
            className="navbar-burger">
             <span aria-hidden="true"></span>
             <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <ul>
              <li className="navbar-item">
                <Link
                  to="/"
                  className={
                    location.pathname === "/" ? "nav-link active" : "nav-link"
                  }
                  style={NavbarFont}
                >
                  Home
                </Link>
              </li>
              <li className="navbar-item">
                <Link
                  to="/about"
                  className={
                    location.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  style={NavbarFont}
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" style={NavbarFont}>
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Footer" style={NavbarFont}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
            <div className="field is-grouped">
                <p className="control">
                  <Link href="mailto:dobsonemily@gmail.com">
                    <i className="fa fa-envelope"></i>
                  </Link>
                </p>
              </div>
            </div>
          </div>
      </nav>
  
  );
}

export default Navbar;
