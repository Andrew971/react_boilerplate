import React, {Component} from 'react';
import logo from '../../Assets/logo.svg';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

class MainContainer extends Component {

  render() {
    const {targetLanguage,Data,SharedData} =this.props
    console.log(Data)
    console.log(SharedData)
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
        targetLanguage:{targetLanguage}
      </p>
    </main>)
  }
}
const mapStateToProps = (state) => {

  return {
    targetLanguage:state.sharedState.targetLanguage,
    Data:state.sharedState.websiteContent,
    SharedData:state.sharedState.sharedContent
  }

}

export default withRouter(connect(mapStateToProps)(MainContainer));
