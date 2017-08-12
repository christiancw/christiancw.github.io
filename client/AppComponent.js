import  React, { Component } from 'react';
import AboutMe from './AboutMe';

export default class AppComponent extends Component {

  render () {
    return (
      <div>
        <div className="topName">
          Christian Wentling
        </div>
          <AboutMe />
      </div>
    );
  }
}
