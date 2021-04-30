import React from "react";
import { Link, useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

const NavbarFont = {
  color: "#7f867b",
};

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar" role="navigation">
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
            <div className="navbar-item">
              <Link
                to="/"
                className={
                  location.pathname === "/" ? "nav-link active" : "nav-link"
                }
                style={NavbarFont}
              >
                Home
              </Link>
            </div>
            <div className="navbar-item">
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
            </div>
            <div className="navbar-item">
              <Link to="/portfolio" style={NavbarFont}>
                Portfolio
              </Link>
            </div>
            <div className="navbar-item">
              <Link to="/Footer" style={NavbarFont}>
                Contact
              </Link>
            </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <Link href="mailto:dobsonemily@gmail.com">
                  {/* <i className="fa faEnvelopeOpenO"></i> */}
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
