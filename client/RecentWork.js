import React from 'react';
import Mark from '../mark-github.svg';
import Triangle from '../triangle-right.svg';
import Globe from '../globe.svg';

export default function RecentWork (props){
  return (
    <div className="projects-container container-fluid" id="projects">
      <div className="row">
        <div className="project-box col-md">
          <h4>I (AR)t NY</h4>
          <a href="https://github.com/jhoscar1/capstone" className="project-icon">
            Code
            <Mark />
          </a>
          <a href="https://www.youtube.com/watch?v=Cal59NL6_0c&t=105s" className="project-icon">
            Play Demo
            <Triangle />
          </a>
          <ul>
            <li>Mobile AR application that directs users to nearby public art installations and cultural landmarks</li>
            <li>Firebase backend and React Native front-end (runs on Android and iOS devices)</li>
            <li>Incorporates native features including the camera, GPS, and gyroscope</li>
          </ul>
          <div className="collaborators">Collaborators: <a href="https://github.com/dweste01">Danielle</a>,<a href="https://github.com/phoyt1">Pat</a>,<a href="https://github.com/jhoscar1">Jason</a></div>
        </div>
        <div className="project-box col-md">
          <h4>FeelTunes</h4>
          <a href="https://github.com/christiancw/feel-tunes">
            Code
            <Mark className="project-icon" />
          </a>
          <a href="https://feeltunes.herokuapp.com/">
            Deployed
            <Globe className="project-icon" />
          </a>
          <ul>
            <li>Web app that generates Spotify playlists from text (the user’s feelings), using IBM Watson’s Tone Analyzer API</li>
            <li>React-Redux application that includes Passport OAuth, allowing users to log in with Spotify credentials</li>
          </ul>
          Solo Project
        </div>
        <div className="project-box col-md">
          <h4>Harry Shopper</h4>
          <a href="https://github.com/christiancw/diagonal-shopper">
            Code
            <Mark className="project-icon" />
          </a>
          <ul>
            <li>Wizarding-themed e-commerce site</li>
            <li>Node, Express, and Postgres backend; React-Redux front-end</li>
            <li>Includes product review functionality, user authentication, persistent carts using local storage</li>
          </ul>
          <div className="collaborators">Collaborators: <a href="https://github.com/ptrkkim">Patrick</a>, <a href="https://github.com/Decoyono">Matt</a>, <a href="https://github.com/jacobkjhan">Jacob</a></div>
        </div>
      </div>
    </div>
  )
}
