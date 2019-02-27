import React, { Component } from 'react';
import reactImage from '../assets/React.js_logo-512.png';
import reactRouterImage from '../assets/react-router.png';
import cssImage from '../assets/css.png';
import herokuImage from '../assets/heroku.png';
import githubImage from '../assets/github.png';
import '../style/icons.css'

export default class Icons extends Component{

  render () {
    return (
      <div className="img-icons">
        <img src={reactImage} alt="react-icon" className="react-icon"/>
        <img src={reactRouterImage} alt="react-router-icon" className="react-router-icon"/>
        <img src={cssImage} alt="css-icon" className="css-icon"/>
        <img src={herokuImage} alt="heroku-icon" className="heroku-icon"/>
        <img src={githubImage} alt="github-icon" className="github-icon"/>
      </div>
    );
  }
}
