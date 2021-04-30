import React from "react";
// import { Card } from "react-bulma-components"
import data from "../../projects.json";

// const styles={
//  column: {
//   "webkitBoxAlign": "center",
//   "msFlexAlign": "center",
//   "alignItems": "center",
//   "display": "flex"
// },
const ProjectCard = (props) => {
  return (
    // edit with links to images
    <section className="container-fluid">
    <div className= "columns">
      <div className= "column is-6 is-centered">
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
              <p className= "subtitle is-6"> {portfolio.tech}</p>
            </div>
            <div className="content">
              <div>
              <a href={portfolio.github}>GitHub</a>
              <br></br>
              <a href={portfolio.deploy}>Deployed</a>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default ProjectCard;
