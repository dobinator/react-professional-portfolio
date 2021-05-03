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
            to="/contact"
            style={{ color: "white", fontSize: "18px" }}
            className="navbar-item"
            onClick={toggleBurgerMenu}
          >
          Portfolio
          </Link>
          <Link to="/notes" className="navbar-item" 
          style={{ color: "white", fontSize: "18px" }}onClick={toggleBurgerMenu}>
            Contact
          </Link>
          <a
           style={{ color: "white", fontSize: "18px" }}
            // href="../../../public/images/resume_pdf.pdf"
            className="navbar-item"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
    
    //   <div className="navbar-brand">
    //     <p className="navbar-item">
    //       <Link
    //         to="/"
    //         className={
    //           location.pathname === "/" ? "nav-link active" : "nav-link"
    //         }
    //         style={{ color: "#48d1cc", fontSize: "40px" }}
    //       >
    //      
    //       </Link>
    //     </p>

    //     <div className="navbar-burger" data target="navMenu">
    //       <span aria-hidden="true"></span>
    //       <span aria-hidden="true"></span>
    //       <span aria-hidden="true"></span>
    //     </div>
    //   </div>
    //   <div className="navbar-menu">
    //     <div className="navbar-start">
    //       <div className="navbar-item">
    //         <Link
    //           to="/about"
    //           className={
    //             location.pathname === "/about" ? "nav-link active" : "nav-link"
    //           }
    //           style={{ color: "white", fontSize: "18px" }}
    //         >
    //           About Me
    //         </Link>

    //         <div className="navbar-item">
    //           <Link
    //             to="/portfolio"
    //             style={{ color: "white", fontSize: "18px" }}
    //           >
    //             Portfolio
    //           </Link>
    //         </div>

    //         <Link
    //           to="/resume"
    //           className={
    //             location.pathname === "/about" ? "nav-link active" : "nav-link"
    //           }
    //           style={{ color: "white", fontSize: "18px" }}
    //         >
    //           Resume
    //         </Link>

    //         <div className="navbar-item">
    //           <Link to="/Footer" style={{ color: "white", fontSize: "18px" }}>
    //             Contact
    //           </Link>
    //         </div>
    //         <div className="navbar-end">
    //           <div className="navbar-item">
    //             <div className="field is-grouped">
    //               <p className="is-size-4">
    //                 <Link>
    //                   <i
    //                     className="fa fa-envelope-o"
    //                     href="mailto:dobsonemily@gmail.com"
    //                     style={{ color: "white" }}
    //                   ></i>
    //                 </Link>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Navbar;
