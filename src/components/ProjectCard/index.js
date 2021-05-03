import React from "react";
import data from "../../projects.json";

const ProjectCard = (props) => {
  return (

    <section className="container-fluid">
    <div className= "columns">
      <div className= "column" 
      style= {{display: "flex", flexDirection: "column", alignItems: "center"}}>
        {data.map((portfolio) => (
          <div className="card" style= {{margin:"20px", maxWidth: "50%", borderRadius: "20px"}}>
        <p className="title is-4" style= {{ textAlign: "center" }}>{portfolio.title}</p>
        <p className="content" style= {{textAlign: "center"}}>{portfolio.description}</p>
            <div className="card-image">
              <img
                className="image"
                src={`/images/${portfolio.image}`}
                alt={portfolio.alt}
              />
            </div>
            <div className="media-content">
              <p className= "subtitle is-6" style= {{ textAlign: "center" }}> {portfolio.tech}</p>
            </div>
            <div className="content"style= {{ textAlign: "center" }}>
              <div>
              <a href={portfolio.github}><i className="fa fa-github"> Github</i></a>
            </div>
              <a href={portfolio.deploy}><i className="fa fa-external-link-square"> Deployed</i></a>
            </div>
          </div>
    
        ))}
    </div>
    </div>
    </section>
  );
};

export default ProjectCard;
