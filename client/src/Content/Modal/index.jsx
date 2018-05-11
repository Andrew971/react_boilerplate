import React, {Component} from "react";
import ModalEn from './en'
import ModalFr from './fr'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

class NavContent extends Component {

  render() {
    const {Language} = this.props
    switch (Language) {
      case 'En':
        return (<ModalEn counter={this.props.counter}/>)
      case 'Fr':
        return (<ModalFr counter={this.props.counter}/>)
      default:
        return (<ModalEn counter={this.props.counter}/>);
    }
  }
}

const mapStateToProps = (state) => {

  return {Language: state.UI.Language}

}
export default withRouter(connect(mapStateToProps)(NavContent));
