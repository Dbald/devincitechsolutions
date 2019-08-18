import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../../img/2.1.png';
import './navbar.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isTop: true
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });

    // document.addEventListener('scroll', () => {
    //   const serveId = window.scrollTo
    // })
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    return (
        <div id="header" className={this.state.isTop ? "header" : "header-scroll"} >
          <div className="logo-holder">
            <Link to="/home">
              <img className="logo" src={logo} alt="dts" />
            </Link>
          </div>
          <div className="main-div">
          <Link className={this.state.isTop ? "links" : "links-scroll"} to="/about">About</Link>
          {/* <Link to="apps">
            </Link> */}
          <Link className={this.state.isTop ? "links" : "links-scroll"} to="/home/:services">Services</Link>
          <Link className={this.state.isTop ? "links" : "links-scroll"} to="/media">Media</Link>
          <Link className={this.state.isTop ? "links" : "links-scroll"} to="/contact">Contact</Link>
          </div>
        </div>
    );
  }
}
export default Header;