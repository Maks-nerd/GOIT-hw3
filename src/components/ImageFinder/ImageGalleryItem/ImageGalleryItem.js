// Модули
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Компоненты
import Modal from '../Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => {
      return {
        showModal: !prevState.showModal,
      };
    });
  };

  render() {
    const { previewURL, tags, largeImageURL } = this.props;
    const { showModal } = this.state;

    return (
      <>
        <img
          src={previewURL}
          alt={tags}
          className="ImageGalleryItem-image"
          onClick={this.toggleModal}
        />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
	previewURL: PropTypes.string.isRequired,
	tags: PropTypes.string.isRequired,
	largeImageURL: PropTypes.string.isRequired
}

export default ImageGalleryItem;
