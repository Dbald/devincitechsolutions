import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Footer from './components/navbar/footer';
// import TabBar from './components/navbar/tabbar';

import Links from './pages/links/index';
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
          <Route exact path="/" component={Links} />
          {/* <Route exact path="/" component={Home}/>
       
        <Route path="/about" component={About}/>
        <Route path="/apps" component={Apps}/>
        <Route path="/home/:services"/>
        <Route path="/contact" component={Contact}/>
        <Route path="/" component={Footer}/>
        <Route path="/" component={TabBar}/> */}
        </div>
      </Router>
    );
  }
}

export default App;
