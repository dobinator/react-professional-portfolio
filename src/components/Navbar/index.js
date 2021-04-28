import React from 'react'; 
import { Link, useLocation } from "react-router-dom";

function Navbar(props) {
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

        <div class="navbar-end">
         <div class="navbar-item">
            <div class="field is-grouped">
                <p class="control">
                    <a href="mailto:dobsonemily@gmail.com">
                        <i class="fa fa-envelope"></i>
                    </a>
                </p>
            </div>
          </div>
        </div>
    </nav>
    )
}

export default Navbar; 
