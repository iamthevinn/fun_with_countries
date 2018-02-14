import React, { Component } from 'react';
import logo from './logo.svg';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

const NMBloc = (props) => {
  return (
    <Route exact={props.exact} path={props.to} children={({match}) => {
      return (
        <li className={`tab-title ${match ? 'active' : ''}`} >
          <Link to={props.to}>{props.tabName}</Link>
        </li>
      )}
    } />
  )
}

class BlocList extends Component {
  render() {
    return (
        <ul class="tabs vertical">
          <NMBloc exact={true} to={"/EU"} tabName="EU"/>
          <NMBloc exact={true} to={"/EFTA"} tabName="EFTA"/>
          <NMBloc exact={true} to={"/CARICOM"} tabName="CARICOM"/>
          <NMBloc exact={true} to={"/PA"} tabName="PA"/>
        </ul>
    );
  }
}

export default BlocList;
