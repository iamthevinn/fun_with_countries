import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import BlocList from './BlocList'
import { connect } from 'react-redux'
import { CHANGE_SELECTED_BLOCK, loadBlocDataToState } from './state/actions';


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
          <div className="trackingLink">Tracking</div>
          <div>{this.props.selectedBloc}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    selectedBloc: state.selectedBloc
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedBloc: (blocName) => dispatch({ type: CHANGE_SELECTED_BLOCK, payload: blocName }),
    setBlocData: (blocName) => dispatch(loadBlocDataToState(blocName))
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(BlocView);

