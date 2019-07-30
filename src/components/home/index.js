import "aframe";
import React, { Component } from "react";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <figure className="card card-1">
        <div className="overlay"></div>
        <div className="text-box">
          <h1>Welcome to DTS!</h1>
          <p>Born in Los Angeles, now based in the bay area, Devinci Tech Solutions provides web services such as Web Development, Web Editing/ Design. We like to have fun and thrive off friendships. Get to know us!</p>
          <button className="welcome-button">Explore</button>
        </div>
          <svg
            className="curve-overlay"
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
            className="curve"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 210.87411 63.63599"
            version="1.1"
          >
            <path
              d="M -0.56696429,84.253448 C 67.319496,107.77316 69.99322,102.87654 88.466212,98.953271 103.76651,95.703815 122.50808,64.727945 146.99823,76.235362 191.36498,97.082384 210.90807,47.259546 210.90807,47.259546 l -0.56696,63.453584 -210.64080474,0.53454 z"
              transform="translate(0.40071066,-47.210106)"
            />
          </svg>
          {/* <a-scene id="scene" embedded>
            <a-assets>
              <a-asset-item id="dts" src={require("../../models/dts.glb")} />
            </a-assets>
            <a-gltf-model
              src="#dts"
              position="-5 1.5 3"
              rotation="4 118.566 -1.695"
            />
            <a-sky src={require("../../img/IMG_0162.jpg")} />
          </a-scene> */}
        </figure>
        <figure className="card card-2">
          <h1>2</h1>
        </figure>
        <figure className="card card-3">
          <h1>3</h1>
        </figure>
        <figure className="card card-4">
          <h1>4</h1>
        </figure>
        <figure className="card card-5">
          <h1>5</h1>
        </figure>
        <figure className="card card-6">
          <h1>6</h1>
        </figure>
        <figure className="card card-7">
          <h1>7</h1>
        </figure>
        <figure className="card card-8">
          <h1>8</h1>
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
      </div>
    );
  }
}
