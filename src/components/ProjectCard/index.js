import React from "react";
// import { Card } from "react-bulma-components"
import data from "../../projects.json";



// const columnStyle={
//   is-vcentered
//   webkit-box-align: center;
//   ms-flex-align: center;
//   align-items: center;
// }

const ProjectCard = (props) => {
  return (
    // edit with links to images
    <div className="container-fluid">
      <div className="column is-6 is-centered">
        {data.map((portfolio) => (
          <div className="card">
            <div className="card-image">
              <img
                className="image"
                src={`/images/${portfolio.image}`}
                alt={portfolio.alt}
              />
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
      </div>
    </div>
  );
};

export default ProjectCard;
