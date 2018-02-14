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
    console.log(this.props.country)
    return (
      <div>
        <div className="columns small-2 padding-medium leftNavPanel">
          <NavList />
        </div>
        <div className="columns small-10 padding-medium rightHome">
          <div className="countryViewHeader">
            <h1>CountryName</h1>
          </div>
          <div>
            Capital: {this.props.country.name}
          </div>
          <div>
            Currencies: {this.props.country.currencies.map((currency) => (
              <div style={{ display: 'inline-block', paddingRight: '5px' }}>
                <div style={{ display: 'inline-block', paddingRight: '5px' }}>Name: {currency.name}</div>
                <div style={{ display: 'inline-block', paddingRight: '5px' }}> Symbol: {currency.symbol}</div>
              </div>
            ))
            }
          </div>
          <div>
            Languages: {this.props.country.languages.map((language) => (
              <div style={{ display: 'inline-block', paddingRight: '5px' }}>{language.name}</div>
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
              <img style={{height: '40%', width: '60%'}} src={this.props.country.flag} alt="flag" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    country: state.selectedCountry
  };
};


export default connect(mapStateToProps)(CountryView)