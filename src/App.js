import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import HomeView from './HomeView'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact to="/" component={HomeView} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
