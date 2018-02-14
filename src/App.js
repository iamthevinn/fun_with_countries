import React, { Component } from 'react';
import logo from './logo.svg';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import HomeView from './HomeView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeView />
      </div>
    );
  }
}

export default App;
