import React from 'react';
// import img from '../GitHub-Mark-32px.png'
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import FontIcon from 'material-ui/FontIcon';
import Mark from '../mark-github.svg'
import LinkedIn from '../iconmonstr-linkedin-3.svg'
import FilePDF from '../file-pdf.svg'


export default function Contact (props){
  return (
    <div className="contact-bar" id="contact">
      <a href ="https://github.com/christiancw/resume/blob/master/CWentling%20Resume%20GitHub.pdf"><FilePDF className="button-icon" /></a>
      <a href="https://www.linkedin.com/in/christian-wentling/"><LinkedIn className="button-icon" /></a>
      <a href="https://github.com/christiancw"><Mark className="button-icon" /></a>
    </div>
  )
}
