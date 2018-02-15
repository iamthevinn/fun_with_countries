import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import BlocList from './BlocList'
import { connect } from 'react-redux'
import { CHANGE_SELECTED_BLOCK, loadBlocDataToState } from './state/actions';
import CountryCard from './CountryCard';
import {
  Link,
} from 'react-router-dom'

class BlocView extends Component {

  componentDidMount() {
    this.props.setSelectedBloc(this.props.match.params.bloc.toUpperCase())
    this.props.setBlocData(this.props.match.params.bloc)
  }

  render() {
    return (
      <div>
        <div className="columns small-2 padding-medium leftNavPanel">
          <BlocList />
        </div>
        <div className="columns small-10 padding-medium rightHome">
          <Link to={"/tracking/countries"} className="trackingLink">Tracking</Link>
          <div className="blocViewHeader">
            <h1>{this.props.selectedBloc}</h1>
          </div>
          <div>
            {this.props.blocData.map((country) => <CountryCard key={country.alpha3Code} history={this.props.history} match={this.props.match} trackedCountry={this.props.trackedCountries.find((trackedCountry) => trackedCountry.countryName === country.name)} country={country} />)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    selectedBloc: state.selectedBloc,
    blocData: state.blocData,
    trackedCountries: state.trackedCountries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedBloc: (blocName) => dispatch({ type: CHANGE_SELECTED_BLOCK, payload: blocName }),
    setBlocData: (blocName) => dispatch(loadBlocDataToState(blocName))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(BlocView);

