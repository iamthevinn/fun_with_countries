import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import { connect } from 'react-redux'
import { CHANGE_SELECTED_COUNTRY, addCountryToTrack, untrackCountry} from './state/actions';


class CountryCard extends Component {

  showCountry(country) {
    this.props.setSelectedCountry(country)
    this.props.history.push("/countries/" + country.name.toLowerCase())
  }

  toggleIsTracked(countryName, trackedCountry) {
    if(trackedCountry)
      this.props.untrackCountry(trackedCountry.id)
    else
      this.props.trackCountry(countryName)
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
          <button disabled={this.props.onBloc && this.props.trackedCountry} onClick={() => this.toggleIsTracked(this.props.country.name, this.props.trackedCountry)} className={this.props.trackedCountry ? this.props.onBloc ? "warning" : "alert" : "success"} style={{ width: '100%' }}>{this.props.trackedCountry ? "Tracked" : "Track"}</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSelectedCountry: (country) => dispatch({ type: CHANGE_SELECTED_COUNTRY, payload: country }),
    trackCountry: (countryName) => dispatch(addCountryToTrack({countryName: countryName})),
    untrackCountry: (countryId) => dispatch(untrackCountry(countryId))
  }
};

export default connect(null, mapDispatchToProps)(CountryCard);
