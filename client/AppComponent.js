import  React, { Component } from 'react';
import AboutMe from './AboutMe';
import RecentWork from './RecentWork';
import Contact from './Contact';

export default class AppComponent extends Component {

  render () {
    return (
      <div className="mainContainer">
        <div className="topFrame">
          <div className="topText">
            <h2>Christian Wentling</h2>
            <a href="#about">About | </a>
            <a href="#projects">Projects | </a>
            <a href="#contact">Contact</a>
          </div>
        </div>
          <AboutMe />
          <RecentWork />
          <Contact />
      </div>
    );
  }
}
