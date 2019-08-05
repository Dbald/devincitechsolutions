import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
          <div className="main-div">
          <Link className="links" to="/about">About</Link>
          {/* <Link to="apps">
            </Link> */}
          <Link className="links" to="/services">Services</Link>
          <Link className="links" to="/media">Media</Link>
          <Link className="links" to="/contact">Contact</Link>
          </div>
          <p className="arr">Devinci Tech Solutions, 2019 All Rights Reserved</p>
        </div>
    )
  }
}
