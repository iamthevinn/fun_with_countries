import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom'

class NavList extends Component {

  render() {
    return (
      <ul className="tabs vertical">
        <li className="tab-title" >
          <Link to='/'>Home</Link>
        </li>
        <li className="tab-title" >
          <Link to='/tracking/countries'>Tracking</Link>
        </li>
      </ul>
    );
  }
}

export default NavList;