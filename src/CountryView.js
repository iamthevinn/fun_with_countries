import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import BlocList from './BlocList'
import { connect } from 'react-redux'
import { CHANGE_SELECTED_BLOCK, loadBlocDataToState } from './state/actions';
import CountryCard from './CountryCard';
import NavList from './NavList'


class CountryView extends Component {

  render() {
    return (
      <div>
        <div className="columns small-2 padding-medium leftNavPanel">
          <NavList />
        </div>
        <div className="columns small-10 padding-medium rightHome">
          <div className="countryViewHeader">
            <h1>CountryName</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryView