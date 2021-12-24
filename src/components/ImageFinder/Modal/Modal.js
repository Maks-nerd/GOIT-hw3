// Модули
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
		window.addEventListener('keydown', this.onCloseModal)
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.onCloseModal)
	}

	onCloseModal = (e) => {
		if(e.code === 'Escape'){
			this.props.onClose();
		}
	}

	onClickOverlay = (e) => {
		if(e.target === e.currentTarget) {
			this.props.onClose();
		}
	}

  render() {
    const { children } = this.props;

    return createPortal(
      <div className="Overlay" onClick={this.onClickOverlay}>
        <div className="Modal">{children}</div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
	onClose: PropTypes.func.isRequired
}

export default Modal;
