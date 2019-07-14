import 'aframe';
import React, { Component } from "react";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <figure className="card card-1">
        <a-scene id="scene" embedded>
        <a-assets>
    <a-asset-item id="dts" src={require('../../models/dts.glb')}/>
  </a-assets>
  <a-gltf-model src="#dts" position="-5 1.5 3" rotation="4 118.566 -1.695"></a-gltf-model>
        <a-sky src={require('../../img/Edit_MG_1134-2.jpg')} />
      </a-scene> 
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
      </div>
    );
  }
}
