import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return(
      <div></div>
    )
  }
}

function mapStatesToProps(state) {
  return {...state};
}

export default connect(mapStatesToProps)(App);
