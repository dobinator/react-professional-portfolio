import React from "react";
// import { Card } from "react-bulma-components"
import data from "projects.json"; 


const ProjectCard= (props) =>{
  return (
    // edit with links to images
    <div className="container-fluid">
      <column style = "column is-8">
        {data.map((portfolio)=> (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3"
          src={`assets/images/${portfolio.image}`}
          alt={portfolio.alt}></figure>
        </div>
            <div className="media-content">
              <p className="title is-4">{portfolio.title}</p>
              <p className="subtitle is-6"></p>
            </div>
          <div className="content">
          {portfolio.tech}
            <a href={portfolio.github}></a>
            <a href={portfolio.deploy}></a>
          </div>
        </div>
        ))}
      </column>
    </div>
  );
}

export default ProjectCard;
