import React from 'react'; 
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
// import Container from"./components/Container"
// import About from "./components/pages/aboutMe";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <ProjectCard/>
          {/* <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
           <Route exact path="/aboutMe" component={About} />  */}

        <Footer />
      </div>
    </Router>
  );
}


export default App;
