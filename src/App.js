import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import About from "./components/pages/AboutMe";
import Hero from "./components/Hero";
import Resume from "./components/pages/Resume"; 



function App() {
  return (
    // <Router>
      <div>
        <Navbar />
        <Hero/>
        <Switch>
          <Route exact path= "/" component={ProjectCard}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
        <Footer />
      </div>
    // </Router>
  );
}

export default App;
