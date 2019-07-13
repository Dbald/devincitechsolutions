import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../../img/2.3.png";
import "./navbar.css";

class TabBar extends Component {
  render() {
    return (
      <Router>
        <div id="tabbar" className="header">
          <div className="main-div">
            <Link className="links" to="/about">
            <img className="icon" src="https://piskel-imgstore-b.appspot.com/img/2a468e8f-a5a8-11e9-8683-75ba66f9cf49.gif" alt="about-icon"/>
            </Link>
            <Link className="links" to="/services">
            <img className="icon" src="https://piskel-imgstore-b.appspot.com/img/0a7cc028-a5ad-11e9-8c18-75ba66f9cf49.gif" alt="service-icon"/>
            </Link>
            <Link className="links" to="/home">
              <img className="logo" src={logo} alt="dts" />
            </Link>
            <Link className="links" to="/media">
              Media
            </Link>
            <Link className="links" to="/contact">
            <img className="icon" src="https://piskel-imgstore-b.appspot.com/img/6ea37e5e-a5a6-11e9-8ab6-75ba66f9cf49.gif" alt="contact-icon"/>
            </Link>
          </div>
        </div>
      </Router>
    );
  }
}
export default TabBar;
