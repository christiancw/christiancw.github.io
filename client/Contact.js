import React from 'react';
import Mark from '../mark-github.svg';
import LinkedIn from '../iconmonstr-linkedin-3.svg';
import FilePDF from '../file-pdf.svg';


export default function Contact (){
  return (
    <nav className="nav nav-pills nav-fill" id="contact">
      <a href ="https://github.com/christiancw/resume/blob/master/CWentling%20Resume%20GitHub.pdf" className="nav-item nav-link">Resume <FilePDF /></a>
      <a href="https://www.linkedin.com/in/christian-wentling/" className="nav-item nav-link">LinkedIn <LinkedIn /></a>
      <a href="https://github.com/christiancw" className="nav-item nav-link">Github <Mark /></a>
    </nav>
  )
}
