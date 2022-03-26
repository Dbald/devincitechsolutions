import React, { Component } from "react";
import "./about.css";
export default class About extends Component {
  render() {
    return (
      <div className="about">
        <figure className="mission">
          <h1>About</h1>
          <p>
            Born in Los Angeles, now based in the Bay Area, Devinci Tech
            Solutions provides web services such as Web Development, Web
            Editing/ Design. We love to have fun and thrive off friendships. Get
            to know us!
          </p>
        </figure>
        {/* <figure className="bio-container">
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
        </figure> */}
      </div>
    );
  }
}
