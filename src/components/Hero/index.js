import React from 'react'
import Typical from "react-typical";


function Hero() {
    return (
      <section className = "hero">
      <div className = "hero-body">
         <div className= "container-fluid">
             <figure className= "background image" style= {{backgroundImage: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0 10))",  
       backgroundPosition: "center", 
       backgroundRepeat: "noRepeat",
       backgroundSize: "cover",  
       height: "80%"}}/>
              <img src= "./images/hero.jpg" alt="Amethyst gemstone"/>
              <p className="title" style= {{textAlign: "center", fontSize: "25px", color: "white"}}>I'm a 
              <Typical
              loop= {4}
              wrapper="b"
                steps={[
                " Junior Developer 🖥",
                1000, 
                " an Artist 🎨",
                1000,
                " knitter 🧦",
                1000,
                " photographer 📸",
                1000,
                " teacher 🍎",
                1000, 
                " pet parent 🐶", 
                1000, 
                ]}
              />

            </p>
         </div>
      </div>
   </section>

    )
}

export default Hero; 
