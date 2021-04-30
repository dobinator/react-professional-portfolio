import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
// import Container from"./components/Container"
import About from "./components/pages/AboutMe";
import { faHome } from "@fortawesome/free-solid-svg-icons";


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
