import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import BlocList from './BlocList'
import { connect } from 'react-redux'
import { CHANGE_SELECTED_BLOCK, loadCountryDataToState } from './state/actions';
import CountryCard from './CountryCard';
import NavList from './NavList'

class CountryView extends Component {

  componentDidMount() {
    this.props.loadCountries(this.props.match.params.countryName)
  }

  render() {
    console.log()
    if (this.props.country) {
      return (
        <div>
          <div className="columns small-2 padding-medium leftNavPanel">
            <NavList />
          </div>
          <div className="columns small-10 padding-medium rightHome">
            <div className="countryViewHeader">
              <h1>{this.props.country.name}</h1>
            </div>
            <div>
              Capital: {this.props.country.capital}
            </div>
            <div>
              Currencies: {this.props.country.currencies.map((currency) => (
                <div key={currency.name} style={{ display: 'inline-block', paddingRight: '5px' }}>
                  <div style={{ display: 'inline-block', paddingRight: '5px' }}>Name: {currency.name}</div>
                  <div style={{ display: 'inline-block', paddingRight: '5px' }}> Symbol: {currency.symbol}</div>
                </div>
              ))
              }
            </div>
            <div>
              Languages: {this.props.country.languages.map((language) => (
                <div key={language.name} style={{ display: 'inline-block', paddingRight: '5px' }}>{language.name}</div>
              ))
              }
            </div>
            <div>
              Population: {this.props.country.population}
            </div>
            <div>
              <div>
                Flag:
            </div>
              <div>
                <img style={{ height: '40%', width: '60%' }} src={this.props.country.flag} alt="flag" />
              </div>
            </div>
          </div>
        </div>
      );
    } else return <div></div>
  }
}

const mapStateToProps = state => {

  return {
    country: state.selectedCountry
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCountries: (countryName) => dispatch(loadCountryDataToState(countryName))
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(CountryView)