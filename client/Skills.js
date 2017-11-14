import React from 'react';

export default function Skills (){
  return (
      <div className="skills-list container-fluid" id="about">
        <h4>Primary Technical Skills</h4>
        <div className="list-container row">
        <div className="col-md-4 skill-col">
          <div className="list-item">JavaScript</div>
          <div className="list-item">CSS</div>
          <div className="list-item">HTML</div>
          <div className="list-item">SQL</div>
          <div className="list-item">Node</div>
        </div>
        <div className="col-md-4 skill-col middle-col">
          <div className="list-item">React (and React Native)</div>
          <div className="list-item">Express</div>
          <div className="list-item">GraphQL</div>
          <div className="list-item">Redux</div>
          <div className="list-item">Postgres</div>
        </div>
        <div className="col-md-4 skill-col">
          <div className="list-item">jQuery</div>
          <div className="list-item">Bootstrap</div>
          <div className="list-item">Sequelize</div>
          <div className="list-item">AJAX</div>
          <div className="list-item">React Router</div>
        </div>
        </div>
    </div>
  )
}
