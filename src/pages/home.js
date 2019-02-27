import React, { Component } from "react";
import '../style/home.css'
import myImage from '../assets/D50_8017.jpg'
import Icons from '../layouts/icons'

export default class Home extends Component {
  render() {
    return (
      <div className="home-compo">
        <img src={myImage} alt="Marius Guei" className="myImage"/>
        <p className="short-about-me">
          I’m a full stack software developer with experience developing applications in Ruby and Javascript.<br/>
        Adopted the Agile methodology at Makers Academy, along with many other processes.
          <br/>
          <br/>
          I'm excited to learn new technologies and techniques across the full technical stack.
          I strive to learn something new every day and put those new skills to use as soon as possible.
          <br/>
          <br/>
          Browse my website to get to know more about me and feel free to get intouch.
          <br/>
          I've built this site using the stack below:
          <Icons />
        </p>
      </div>
    );
  }
}
