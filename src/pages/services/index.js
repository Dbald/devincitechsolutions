import React, { Component } from 'react'
import './services.css'

export default class Services extends Component {
  render() {
    return (
      <div className="Services">
        <div className="info">
        <h1>Services</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor.</p>
        </div>
        <div className="choose">
          <img className="service-card web" src="https://i.imgur.com/veuf8Xp.png" alt="web"/>
          <img className="service-card graphic" src="https://i.imgur.com/nAvLc5C.png" alt="graphic"/>
          <img className="service-card content" src="https://i.imgur.com/5Cv1FeZ.png" alt="content"/>
        </div>
      </div>
    )
  }
}
