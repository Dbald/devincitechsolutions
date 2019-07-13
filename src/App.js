import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/navbar/header';
import TabBar from './components/navbar/tabbar';
import Home from './components/home/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route path="/" component={Header}/>
        <Route exact path="/home" component={Home}/>
        {/* <Route path="/about" component={About}/>
        <Route path="/apps" component={Apps}/>
        <Route path="/services" component={Services}/>
        <Route path="/contact" component={Contact}/> */}
        <Route path='/' component={TabBar}/>
      </div>
      </Router>
    );
  }
}

export default App;
