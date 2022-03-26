// import "aframe";
import React, { Component } from "react";
// import Iframe from 'react-iframe';
import "./home.css";

import About from "../about/index";
// import Services from '../services/index'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      sectionA: true,
      sectionB: true,
      sectionC: true,
      serve1: true,
      serve2: true,
      serve3: true
    };
  }

// Scroll Animations
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const sectionA = window.scrollY < 50;
      if (sectionA !== this.state.sectionA) {
        this.setState({ sectionA });
      }
    });

    document.addEventListener("scroll", () => {
      const sectionB = window.scrollY < 55;
      if (sectionB !== this.state.sectionB) {
        this.setState({ sectionB });
      }
    });

    document.addEventListener("scroll", () => {
      const sectionC = window.scrollY < 600;
      if (sectionC !== this.state.sectionC) {
        this.setState({ sectionC });
      }
    });

    document.addEventListener("scroll", () => {
      const serve1 = window.scrollY < 700;
      if (serve1 !== this.state.serve1) {
        this.setState({ serve1 });
      }
    });

    document.addEventListener("scroll", () => {
      const serve2 = window.scrollY < 712;
      if (serve2 !== this.state.serve2) {
        this.setState({ serve2 });
      }
    });

    document.addEventListener("scroll", () => {
      const serve3 = window.scrollY < 714;
      if (serve3 !== this.state.serve3) {
        this.setState({ serve3 });
      }
    });
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="home">
        <figure className="card card-1">
          <div className="overlay" />
          <div className="text-box">
            <h1>Welcome to DTS!</h1>
            <p>
              Born in Los Angeles, now based in the Bay Area, Devinci Tech
              Solutions provides web services such as Web Development, Web
              Editing/ Design. We love to have fun and thrive off friendships.
              Get to know us!
            </p>
            <button className="welcome-button" href="">
              Explore
            </button>
          </div>
          <svg
            className={
              this.state.sectionA ? "curve-overlay" : "curve-overlay-scroll"
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 221.37916 33.201855"
            version="1.1"
          >
            <path
              d="M -4.1577381,98.238567 C 22.151341,83.582684 50.575798,112.59528 67.86651,105.00089 84.300736,97.782684 114.78419,86.831163 140.19466,97.213041 169.37844,109.13657 216.7667,80.899427 216.7667,80.899427 l 0.18899,32.837513 -221.0351466,-0.0324 z"
              transform="translate(4.2904238,-80.667396)"
            />
          </svg>
          <svg
            className={this.state.sectionA ? "curve" : "curve-scroll"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 210.87411 63.63599"
            version="1.1"
          >
            <path
              d="M -0.56696429,84.253448 C 67.319496,107.77316 69.99322,102.87654 88.466212,98.953271 103.76651,95.703815 122.50808,64.727945 146.99823,76.235362 191.36498,97.082384 210.90807,47.259546 210.90807,47.259546 l -0.56696,63.453584 -210.64080474,0.53454 z"
              transform="translate(0.40071066,-47.210106)"
            />
          </svg>
        </figure>

        <figure
          className={this.state.sectionB ? "card card-2" : "card card-2-scroll"}
        >
        </figure>

        <figure className={this.state.sectionB ? "card card-3" : "card card-3-scroll"}>
          <About />
        </figure>
        <figure className="card card-4" />
        <figure className="margin-3"/>
        <figure className={this.state.sectionC ? "card card-5" : "card card-5-scroll"}>
          <h1>Services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolor.
          </p>
        </figure>
        <figure className="margin-3"/>
        <figure className={this.state.serve1 ? "card card-6" : "card card-6-scroll"}>
        <img
            className="service-card web"
            src="https://i.imgur.com/veuf8Xp.png"
            alt="web"
          />
        </figure>
        <figure className={this.state.serve2 ? "card card-7" : "card card-7-scroll"}>
        <img
            className="service-card graphic"
            src="https://i.imgur.com/nAvLc5C.png"
            alt="graphic"
          />
        </figure>
        <figure className={this.state.serve3 ? "card card-8" : "card card-8-scroll"}>
        <img
            className="service-card content"
            src="https://i.imgur.com/5Cv1FeZ.png"
            alt="content"
          />
        </figure>
        <figure className="card card-9">
          <h1>9</h1>
        </figure>
        <figure className="card card-10">
          <h1>10</h1>
        </figure>
        <figure className="card card-11">
          <h1>11</h1>
        </figure>
        <figure className="card card-12">
          <h1>12</h1>
        </figure>
      </div>
    );
  }
}
