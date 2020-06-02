import React, { Component } from 'react';

import { connect } from "react-redux";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.props.currentlable}</h1>
        </header>
        <button  onClick={this.props.onClickSendSignalToReducer}>click me </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { currentlable: state.mylabel };
}


const mapDispatchToProps = (dispatch) => {
  return {
    onClickSendSignalToReducer: () =>
      dispatch({type:"UPDATE_LABEL"}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
