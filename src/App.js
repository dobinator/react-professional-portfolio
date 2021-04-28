import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import Navbar from "/components/Navbar";
import Container from "/components/Container";
import Card from "/components/Card";
import Footer from "/components/Footer";
import About from "./components/pages/aboutMe";



function App(props) {
  render() {
  return (
    <Router>
      <div>
        <Container>
        <Navbar/>
          <Route exact path="/" render={props=>(
        <section>
        <Card></Card>
            </section>
          )} />
          <Router path="/About" component ={About}/>
          </Container>
        <Footer />
      </div>
    </Router>
  );
}

}









export default App;
