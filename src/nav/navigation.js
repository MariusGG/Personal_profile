import React, {Component} from "react";
import { Route, NavLink } from "react-router-dom";
import Popup from 'reactjs-popup';
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import Projects from '../pages/projects';
import '../style/navigation.css'

export default class Navigation extends Component {
  render(){
    return(
      <div className='nav-bar'>
        <nav className='nav-links'>
          <span className='initial'>MG</span>
          <p className='name'>Marius (G) Guei</p>
          <ul>
            <NavLink to="/" className="home">Home</NavLink>
            <NavLink to="/about" className="about">About</NavLink>
            <NavLink to="/contact" className="contact">Contact</NavLink>
            <NavLink to="/projects" className="projects">Projects</NavLink>
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About}  />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
      </div>

    );
  }
}
