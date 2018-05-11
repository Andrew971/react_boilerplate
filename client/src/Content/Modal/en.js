import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {UIAction} from '../../Modules/UI'
import ModalWrapper from '../../Components/ModalWrapper'
import ModalContent from '../../Components/ModalContent'
import ModalClose from '../../Components/ModalClose'


export const ContactEn = ({dispatch}) => (
  <ModalWrapper>
    <ModalContent>
      <ModalClose onClick={() => {
          dispatch(UIAction({type: "MODAL_HIDE", payload: false}))
       }}>&times;</ModalClose>
     <p>Some text in the Contact Modal..</p>
    </ModalContent>

  </ModalWrapper>
);
export const HireEn = ({dispatch}) => (
  <ModalWrapper>

    <ModalContent>
      <ModalClose onClick={() => {
          dispatch(UIAction({type: "MODAL_HIDE", payload: false}))
       }}>&times;</ModalClose>
     <p>Some text in the Hire Modal..</p>
    </ModalContent>

  </ModalWrapper>
);


class ModalEn extends Component {

  render() {
    const {Modal, dispatch} = this.props
    switch (Modal) {
      case 'Contact':
        return (<ContactEn dispatch={dispatch}/>)
      case 'Hire':
        return (<HireEn dispatch={dispatch}/>)
      default:
        return (<ContactEn dispatch={dispatch}/>);
    }
  }
}

const mapStateToProps = (state) => {

  return {
    Modal: state.UI.Modal
  }

}
export default withRouter(connect(mapStateToProps)(ModalEn));
