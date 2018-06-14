import React from 'react';
import ReactDOM from 'react-dom';

export default class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    document.body.appendChild(this.el)
    }

    componentWillUnmount() {
      document.body.removeChild(this.el);
    }
  

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}
