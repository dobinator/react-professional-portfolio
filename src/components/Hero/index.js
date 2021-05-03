import React from 'react'



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
           
         </div>
      </div>
   </section>

    )
}

export default Hero; 
