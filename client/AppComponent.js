import  React, { Component } from 'react';
import Narrative from './Narrative';
import RecentWork from './RecentWork';
import Contact from './Contact';
import Timeline from './Timeline';
import Skills from './Skills';
import Navbar from './Navbar';
import Headline from './Headline';

export default class AppComponent extends Component {

  render (){
    return (
      <div className="mainContainer">
        <Navbar />
        <Headline />
        <Skills />
        <div className="about container-fluid">
          <div className="row">
            <Timeline />
            <Narrative />
          </div>
        </div>
        <RecentWork />
        <Contact />
      </div>
    );
  }
}
