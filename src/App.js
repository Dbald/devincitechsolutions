import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/navbar/header';
import Footer from './components/navbar/footer';
import TabBar from './components/navbar/tabbar';

import Home from './components/home/index';
// import About from './components/about/index';
// import Services from './components/services/index';
// import Media from './components/media/index';
// import Contact from './components/contact/index';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        {/* <Route path="/" component={Header}/>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        {/* <Route path="/about" component={About}/> */}
        {/* <Route path="/apps" component={Apps}/> */
        // <Route path="/home/:services"/>
        /* <Route path="/contact" component={Contact}/> */}
        {/*<Route path="/" component={Footer}/>
        <Route path="/" component={TabBar}/> */}
        <img id="temp" src="https://i.imgur.com/kRXDFcQ.png" alt="logo" />
        <h1>DTS is getting a face lift!</h1>
        <h2>Follow us on Instagram for updates and inquiries.<br/> THANK YOU</h2>
        <a href="https://www.instagram.com/devincitechsolutions/" ><img id="insta" src="https://i.imgur.com/tRj0wrb.png" alt="gram" /></a>

      </div>
      </Router>
    );
  }
}

export default App;
