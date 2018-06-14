import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import './styles.css'
import Main from './Main';
import {ThemeProvider} from 'styled-components';
import Modal from '../Modules/Modal'
import Portal from '../Utils/portal'

class Containers extends Component {

  render() {
    const {Theme, modalDisplay} = this.props
    return (
      <ThemeProvider theme={Theme}>
        <Fragment>
          <Main/> 
          {modalDisplay && <Portal>
            <Modal/>
          </Portal>}
        </Fragment>
      </ThemeProvider>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    shared: state.sharedState.state, 
    modalDisplay: state.sharedState.modalDisplay,
    Theme:state.sharedState.Theme
  };
};

export default connect(mapStateToProps)(Containers);
