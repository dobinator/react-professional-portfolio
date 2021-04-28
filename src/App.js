import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
// import About from "./components/pages/aboutMe";



class App extends Component{




render(){
  return (
      <div>
        <Container>
        <Navbar/>
          {/* <Route exact path="/" render={props=>( */}
        <section>
        <ProjectCard/>
        </section>
          {/* <Router path="/About" component ={About}/> */}
          </Container>
        <Footer/>
      </div>
          )}

 };



export default App;
