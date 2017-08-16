import React from 'react';
import Paper from 'material-ui/Paper';

const styles = {
  height: 400,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  borderRadius: 40,
}

export default function RecentWork (props){
  return (
    <div id="projects" className="projects-section">
      <Paper style={styles} zDepth={1} className="col-4 paperBox">
      <div className="projectBox">
        <h4>I (AR)t NY</h4>
        <a href="https://github.com/jhoscar1/capstone">Code</a>
        <a href="https://www.youtube.com/watch?v=Cal59NL6_0c&t=105s">Demo</a>
        <ul>
          <li>Mobile AR application that directs users to nearby public art installations and cultural landmarks</li>
          <li>Firebase backend and React Native front-end (runs on Android and iOS devices)</li>
          <li>Incorporates native features including the camera, GPS, and gyroscope</li>
        </ul>
      </div>
    </Paper>
    <Paper style={styles} zDepth={1} className="col-4 paperBox">
      <div className="projectBox">
        <h4>FeelTunes</h4>
        <a href="https://github.com/christiancw/feel-tunes">Code</a>
        <a href="https://feeltunes.herokuapp.com/">Deployed</a>
        <ul>
          <li>Web app that generates Spotify playlists from text (the user’s feelings), using IBM Watson’s Tone Analyzer API</li>
          <li>React-Redux application that includes Passport OAuth, allowing users to log in with Spotify credentials</li>
        </ul>
      </div>
    </Paper>
    <Paper style={styles} zDepth={1} className="col-4 paperBox">
      <div className="projectBox">
        <h4>Harry Shopper</h4>
        <a href="https://github.com/christiancw/diagonal-shopper">Code</a>
        <ul>
          <li>Wizarding-themed e-commerce site</li>
          <li>Node, Express, and Postgres backend; React-Redux front-end</li>
          <li>Includes product review functionality, user authentication, persistent carts using local storage</li>
        </ul>
      </div>
    </Paper>
    </div>
  )
}
