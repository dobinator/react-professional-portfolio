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
        <div className="navbar-burger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
            <a className="navbar-item">
              <Link
                to="/"
                className={
                  location.pathname === "/" ? "nav-link active" : "nav-link"
                }
                style={NavbarFont}
              >
                Home
              </Link>
            </a>
            <a className="navbar-item">
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
            </a>
            <a className="navbar-item">
              <Link to="/portfolio" style={NavbarFont}>
                Portfolio
              </Link>
            </a>
            <a className="navbar-item">
              <Link to="/Footer" style={NavbarFont}>
                Contact
              </Link>
            </a>
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
      </div>
    </nav>
  );
}

export default Navbar;
