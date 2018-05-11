import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {UIAction} from '../../Modules/UI'
import ModalWrapper from '../../Components/ModalWrapper'
import ModalContent from '../../Components/ModalContent'
import ModalClose from '../../Components/ModalClose'


export const ContactFr = ({dispatch}) => (
  <ModalWrapper>
    <ModalContent>
      <ModalClose onClick={() => {
          dispatch(UIAction({type: "MODAL_HIDE", payload: false}))
       }}>&times;</ModalClose>
     <p>Some text in the Contact Modal..</p>
    </ModalContent>

  </ModalWrapper>
);
export const HireFr = ({dispatch}) => (
  <ModalWrapper>

    <ModalContent>
      <ModalClose onClick={() => {
          dispatch(UIAction({type: "MODAL_HIDE", payload: false}))
       }}>&times;</ModalClose>
     <p>Some text in the Hire Modal..</p>
    </ModalContent>

  </ModalWrapper>
);


class ModalFr extends Component {

  render() {
    const {Modal, dispatch} = this.props
    switch (Modal) {
      case 'Contact':
        return (<ContactFr dispatch={dispatch}/>)
      case 'Hire':
        return (<HireFr dispatch={dispatch}/>)
      default:
        return (<ContactFr dispatch={dispatch}/>);
    }
  }
}

const mapStateToProps = (state) => {

  return {
    Modal: state.UI.Modal
  }

}
export default withRouter(connect(mapStateToProps)(ModalFr));
