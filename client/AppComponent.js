import  React, { Component } from 'react';
import AboutMe from './AboutMe';
import RecentWork from './RecentWork';
import Contact from './Contact';
import FlatButton from 'material-ui/FlatButton';

export default class AppComponent extends Component {

  render () {
    return (
      <div className="mainContainer">
        <div className="topFrame">
          <div className="topText">
            <h2>Christian Wentling</h2>
            <FlatButton label="About" href="#aboutMeGraf" /> | <FlatButton label="Projects" href="#projects" />
          </div>
        </div>
          <AboutMe />
          <RecentWork />
          <Contact />
      </div>
    );
  }
}
