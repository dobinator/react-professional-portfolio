import React from 'react'; 
import { Link, useLocation } from "react-router-dom";

function Navbar(props) {
  const location = useLocation(); 
    
    return (
    <navbar>
    <nav class="navbar is-transparent">
        <div class="navbar-brand">
        <p class="navbar-item has-text-primary is-size-1">ED</p>
        <div class="navbar-burger" data-target="navbarExampleTransparentExample">
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
                className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
                Projects
            </Link>
            </li>
            <li className="nav-item">
            <Link
                to="/blog"
                className={location.pathname === "/About" ? "nav-link active" : "nav-link"}>
                About
            </Link>
            </li>
            <li className="nav-item">
            <Link
                to="/contact"
                className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                Contact
            </Link>
            </li>
            </ul>

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
  </navbar>

    )
}

export default Navbar; 
