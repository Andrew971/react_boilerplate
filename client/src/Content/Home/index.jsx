import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

class About extends Component {

  render() {
    const {state} = this.props
    switch (state) {
      case 'En':
        return (<div>one</div>)
      case 'Fr':
        return (<div>two</div>)
      default:
        return (<div>one</div>);
    }
  }
}

const mapStateToProps = (state) => {

  return {state: state.state}

}
export default withRouter(connect(mapStateToProps)(About));
