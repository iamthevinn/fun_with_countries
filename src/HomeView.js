import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import BlocList from './BlocList'
import {
  Link,
} from 'react-router-dom'

class HomeView extends Component {
  render() {
    return (
      <div>
        <div className="columns small-2 padding-medium leftNavPanel">
          <BlocList />
        </div>
        <div className="columns small-10 padding-medium rightHome">
          <Link to={"/tracking/countries"} style={{ float: 'right', paddingRight: '20%', fontSize: '24px'}} >Tracking</Link>
        </div>
      </div>
    );
  }
}

export default HomeView;
