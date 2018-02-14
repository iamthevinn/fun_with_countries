import React, { Component } from 'react';
import logo from './logo.svg';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';

class BlocList extends Component {
  render() {
    return (
        <ul class="filter-nav vertical">
          <li class="filter-nav-entry"><button>EU</button></li>
          <li class="filter-nav-entry"><button>EFTA</button></li>
          <li class="filter-nav-entry"><button>CARICOM</button></li>
          <li class="filter-nav-entry"><button>PA</button></li>
        </ul>
    );
  }
}

export default BlocList;
