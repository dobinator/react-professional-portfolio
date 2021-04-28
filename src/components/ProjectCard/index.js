import React from 'react'
// import { Card } from 'react-bulma-components'
// import images from 'images'; 


function ProjectCard({}) {
    return (
      // edit with links to images 
 <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src="#" alt="Placeholder image"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src="#" alt="Placeholder image"/>
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">John Smith</p>
        <p className="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
    </div>
  </div>
</div>    
    ); 
}

export default ProjectCard; 
