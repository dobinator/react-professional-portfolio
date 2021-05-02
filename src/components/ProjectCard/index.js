import React from "react";
// import { Card } from "react-bulma-components"
import data from "../../projects.json";

const ProjectCard = (props) => {
  return (
    // edit with links to images
    <section className="container-fluid">
    <div className= "columns">
      <div className= "column" style= {{display: "flex", flexDirection: "column", alignItems: "center"}}>
        {data.map((portfolio) => (
          <div className="card" style= {{margin:"10px", maxWidth: "50%"}}>
            <div className="card-image">
              <img
                className="image"
                src={`/images/${portfolio.image}`}
                alt={portfolio.alt}
              />
            </div>
            <div className="media-content">
              <p className="title is-4" style= {{ textAlign: "center" }}>{portfolio.title}</p>
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
