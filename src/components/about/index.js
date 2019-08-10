import React, { Component } from "react";
import "./about.css";
export default class About extends Component {
  render() {
    return (
      <div className="about">
        <figure className="margin" />
        <figure className="mission">
          <h1>About</h1>
          <p>
            Born in Los Angeles, now based in the bay area, Devinci Tech
            Solutions provides web services such as Web Development, Web
            Editing/ Design. We love to have fun and thrive off friendships. Get
            to know us!
          </p>
        </figure>
        <figure className="margin" />
        <figure className="margin" />
        <div className="bio-container">
          <svg
            className="layer-1"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 310 350"
          >
            <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
          </svg>
          <svg
            className="layer-2"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 310 350"
          >
            <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
          </svg>
          <div className="profile-top">
            <img
              className="avatar"
              src="https://i.imgur.com/61yd1YE.png?1"
              alt="avatar"
            />
            <div className="title">
              <h2 className="profile">Devin Baldwin</h2>
            <span className="profile">Founder</span>
            </div>
            </div>
            <div className="bio">
            <p className="profile">
              Holistic Full Stack Engineer and 2D/3D Artists/Animator with 6
              years of experience and a focus on HTML/CSS/Javascript/React, and
              UX/UI design. Devin is passionate about crafting new methodology
              for a better user experience. An inquisitive and fast learner,
              morale tends to spike up due to his positive and upbeat
              personality.
            </p>
          </div>
        </div>
        <figure className="margin" />
      </div>
    );
  }
}
