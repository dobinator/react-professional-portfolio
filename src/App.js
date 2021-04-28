import React from 'react'; 
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import Container from"./components/Container"
// import About from "./components/pages/aboutMe";



function App() {
  return (
    <Router>
      <div>
        <Container>
        <Navbar />
          <ProjectCard/>
          {/* <Route exact path="/aboutMe" component={About} /> */}
          </Container>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
