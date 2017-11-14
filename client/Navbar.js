import React from 'react';

export default function Navbar (){
  return (
      <nav className="navbar sticky-top navbar-dark bg-dark">
        <a href="#about" className="nav-item nav-link buttons-nav">About</a>
        <a href="#projects" className="nav-item nav-link buttons-nav">Projects</a>
        <a href="#contact" className="nav-item nav-link buttons-nav">Contact</a>
      </nav>
  )
}
