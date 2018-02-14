import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import BlocList from './BlocList'
import { connect } from 'react-redux'
import { CHANGE_SELECTED_COUNTRY, CHANGE_SELECTED_BLOCK, loadBlocDataToState } from './state/actions';


class CountryCard extends Component {

  showCountry(country) {
    this.props.setSelectedCountry(country)
    this.props.history.push("/countries/" + country.name.toLowerCase())
  }

  render() {
    return (
      <div className="card countryCard">
        <div className="flag">
          <img src={this.props.country.flag} alt="flag" />
        </div>
        <div className="countryDetails">
          <div className="inlineText">Country Name:&nbsp;</div><div onClick={() => this.showCountry(this.props.country)} className="inlineText">{this.props.country.name}</div>
          <div>Capital: {this.props.country.capital}</div>
          <div>Population: {this.props.country.population}</div>
        </div>
        <div className="countryTrackButton">
          {this.props.isTracked ? <button className="alert" style={{ width: '100%' }}>Tracked</button> : <button className="success" style={{ width: '100%' }}>Track</button>}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSelectedCountry: (country) => dispatch({ type: CHANGE_SELECTED_COUNTRY, payload: country })
  }
};

export default connect(null, mapDispatchToProps)(CountryCard);
