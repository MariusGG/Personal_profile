import React, {Component} from "react";
import { Route, NavLink } from "react-router-dom";
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import Projects from '../pages/projects';

class Navigation extends Component{
  render(){
    return(
      <div>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
      </div>


    );
  }
}
export default Navigation;
