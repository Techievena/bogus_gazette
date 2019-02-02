import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Upload from './Upload';
import Read from './Read';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/reader' exact={true} component={Read}/>
          <Route path='/journalist' exact={true} component={Upload}/>
        </Switch>
      </Router>
    )
  }
}

export default App;