import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import About from "./components/pages/AboutMe";



function App() {
  return (
    <Router>
      <div>
        <Navbar />
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
