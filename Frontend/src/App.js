import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Input from './Input'
// import Messages from './Messages' Debug Component
import Mappa from './Mappa'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Input} />
          <Route exact path="/map" component={Mappa} />
        </div>
      </Router>
    );
  }
}

export default App;
