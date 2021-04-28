import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import Navbar from "/components/Navbar";
import Container from "/components/Container";
import Card from "/components/Card";
import Footer from "/components/Footer";




function App() {
  return (
    <Router>
      <div>
        <Container>
        <Navbar />
        <Card>
          </Card>
          <Route exact path="/aboutMe" component={About} />
          </Container>
        <Footer />
      </div>
    </Router>
  );
}









export default App;
