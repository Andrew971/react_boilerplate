import React, {Component} from 'react';
import logo from '../../Assets/logo.svg';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

class MainContainer extends Component {

  render() {
    return (
      <main className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit
        <code>src/App.js</code>
        and save to reload.
      </p>
    </main>)
  }
}
const mapStateToProps = (state) => {

  return {}

}

export default withRouter(connect(mapStateToProps)(MainContainer));
