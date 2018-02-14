import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import BlocList from './BlocList'
import { connect } from 'react-redux'
import { CHANGE_SELECTED_BLOCK, loadBlocDataToState } from './state/actions';


class CountryCard extends Component {
  render() {
    return (
      <div className="card countryCard">
          <div className="flag">
              <img src={this.props.country.flag} alt="flag" />
          </div>
          <div className="countryDetails">
              <div>Country Name: {this.props.country.name}</div>
              <div>Capital: {this.props.country.capital}</div>
              <div>Population: {this.props.country.population}</div>
          </div>
          <div className="countryTrackButton">
              <button className="success" style={{width: '100%'}} >Track</button>
          </div>
      </div>
    );
  }
}

export default CountryCard;