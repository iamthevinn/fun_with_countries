import React, { Component } from 'react';
import logo from './logo.svg';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import BlocList from './BlocList'

class HomeView extends Component {
  render() {
    return (
      <div>
        <div class="columns small-2 padding-medium leftNavPanel">
          <BlocList />
        </div>
        <div class="columns small-10 padding-medium rightHome">
          <div className="trackingLink">Tracking</div>
        </div>
      </div>
    );
  }
}

export default HomeView;
