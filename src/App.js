import React, { Component } from 'react';
import logo from './logo.svg';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="columns small-2 padding-medium leftNavPanel">
          <ul class="filter-nav vertical">
            <li class="filter-nav-entry"><button>EU</button></li>
            <li class="filter-nav-entry"><button>EFTA</button></li>
            <li class="filter-nav-entry"><button>CARICOM</button></li>
            <li class="filter-nav-entry"><button>PA</button></li>
          </ul>
        </div>
        <div class="columns small-10 padding-medium rightHome">
          <div className="trackingLink">
            Tracking
          </div>
        </div>
      </div>
    );
  }
}

export default App;
