import React, {Component} from "react";
import { Route, NavLink } from "react-router-dom";
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
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
      </div>

    );
  }
}
