import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../../img/2.3.png";
import "./navbar.css";

class TabBar extends Component {
  render() {
    return (
      <Router>
        <div id="tabbar" className="header">
          <div className="tab">
            <Link className="links" to="/about">
              <img
                className="icon"
                src="https://piskel-imgstore-b.appspot.com/img/2a468e8f-a5a8-11e9-8683-75ba66f9cf49.gif"
                alt="about-icon"
              />
              <p className="undertext">About</p>
            </Link>
          </div>
          <div className="tab">
            <Link className="links" to="/services">
              <img
                className="icon"
                src="https://piskel-imgstore-b.appspot.com/img/0a7cc028-a5ad-11e9-8c18-75ba66f9cf49.gif"
                alt="service-icon"
              />
              <p className="undertext">Services</p>
            </Link>
          </div>
          <div className="tab">
            <Link className="links" to="/home">
              <img className="logo" src={logo} alt="dts" />
              <p className="undertext">Home</p>
            </Link>
          </div>
          <div className="tab">
            <Link className="links" to="/media">
              <img
                className="icon"
                src="https://piskel-imgstore-b.appspot.com/img/7bd6bf02-a5b5-11e9-bdce-75ba66f9cf49.gif"
                alt="media-icon"
              />
              <p className="undertext">Media</p>
            </Link>
          </div>
          <div className="tab">
            <Link className="links" to="/contact">
              <img
                className="icon"
                src="https://piskel-imgstore-b.appspot.com/img/6ea37e5e-a5a6-11e9-8ab6-75ba66f9cf49.gif"
                alt="contact-icon"
              />
              <p className="undertext">Contact</p>
            </Link>
          </div>
        </div>
      </Router>
    );
  }
}
export default TabBar;
