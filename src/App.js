import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import About from "./components/pages/AboutMe";
import Hero from "./components/Hero"; 



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero/>
        <Switch>
          <Route exact path="/about" component={About} />
          <ProjectCard />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
