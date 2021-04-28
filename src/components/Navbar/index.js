import React from 'react'; 
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); 
    
    return (
    <nav className="navbar is-transparent">
        <div className="navbar-brand">
        <p className="navbar-item has-text-primary is-size-1">ED</p>
        <div className="navbar-burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
         </div>
         </div>
        <ul className="nav nav-tabs">
            <li className="nav-item">
            <Link 
                to="/" 
                className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                Home
            </Link>
                </li>
                <li className="nav-item">
            <Link
                to="/about"
                className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
               About Me
            </Link>
            </li>
            </ul>

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

    )
}

export default Navbar; 
