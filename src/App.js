import React from 'react'; 
// import { BrowserRouter as Router, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
// import About from "./components/pages/aboutMe";



function App(){
  return (
    <div className="container is-fluid">
       <Navbar/>
       <ProjectCard/>
       <Footer/>
     </div>
  )
 };



export default App;
