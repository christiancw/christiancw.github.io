import React from 'react';
// import img from '../GitHub-Mark-32px.png'
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import FontIcon from 'material-ui/FontIcon';
import Mark from '../mark-github.svg'
import LinkedIn from '../iconmonstr-linkedin-3.svg'
import Email from '../mail.svg'


export default function Contact (props){
  return (
    <div className="contact-bar">
      <Email className="button-icon" />
      <LinkedIn className="button-icon" />
      <Mark className="button-icon" />
    </div>
  )
}
