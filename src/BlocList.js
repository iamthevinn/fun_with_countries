import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import {
  Route,
  Link,
} from 'react-router-dom'
import { connect } from "react-redux";
import { loadCountryDataToState, CHANGE_SELECTED_BLOCK } from './state/actions'

const NMBloc = (props) => {

  return (
    <Route exact={props.exact} path={props.to} children={({ match }) => {
      return (
        <li className={`tab-title ${match ? 'active' : ''}`} >
          <Link onClick={() => props.changeSelectedBloc(props.tabName)} to={props.to}>{props.tabName}</Link>
        </li>
      )
    }
    } />
  )
}


class BlocList extends Component {

  componentDidMount() {
    this.props.loadCountryDataToState()
  }

  render() {
    return (
      <ul className="tabs vertical">
        {this.props.blocs.map((bloc) => <NMBloc changeSelectedBloc={this.props.changeSelectedBloc} key={bloc} exact={true} to={"/" + bloc.toLowerCase()} tabName={bloc} />)}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  function getBlocs() {
    const blocArray = state.countryData.map((country) => country.regionalBlocs)
    let blocs = [];
    for (let i = 0; i < blocArray.length; i++) {
      for (let j = 0; j < blocArray[i].length; j++) {
        if (!blocs.includes(blocArray[i][j].acronym))
          blocs.push(blocArray[i][j].acronym)
      }
    }
    return blocs;
  }
  return {
    blocs: getBlocs(),
    countryData: state.countryData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCountryDataToState: () => dispatch(
      loadCountryDataToState()
    ),
    changeSelectedBloc: (blocName) => dispatch({ type: CHANGE_SELECTED_BLOCK, payload: blocName })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BlocList);
