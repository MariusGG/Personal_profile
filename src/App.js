import React, { Component } from 'react'
import Navigation from './nav/navigation'
import './style/app.css'

export default class App extends Component {

  render () {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Navigation />
      </div>
    )
  }
}
