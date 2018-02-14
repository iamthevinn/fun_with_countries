import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import NavList from './NavList'
import { connect } from 'react-redux'
import { loadTrackedCountriesToState, loadCountryDataToState } from './state/actions';
import CountryCard from './CountryCard';


class TrackedView extends Component {

  componentDidMount() {
    this.props.loadCountries();
    this.props.loadTracked();
  }

  render() {
    return (
      <div>
        <div className="columns small-2 padding-medium leftNavPanel">
          <NavList />
        </div>
        <div className="columns small-10 padding-medium rightHome">
          <div>
            {this.props.trackedCountries.map((trackedCountry) => {
              const country = this.props.countryData.find((country) => country.name === trackedCountry.countryName)
              return (
                <CountryCard key={country.alpha3Code} history={this.props.history} match={this.props.match} trackedCountry={this.props.trackedCountries.find((trackedCountry) => trackedCountry.countryName === country.name)} country={country} />
            )})}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    trackedCountries: state.trackedCountries,
    countryData: state.countryData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadTracked: (blocName) => dispatch(loadTrackedCountriesToState()),
    loadCountries: () => dispatch(loadCountryDataToState())
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(TrackedView);

