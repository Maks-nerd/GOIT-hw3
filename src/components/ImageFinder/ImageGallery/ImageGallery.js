// Модули
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

// Компоненты
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';

// Api
import imageApi from '../../../api/imageApi';

// Стили
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class ImageGallery extends Component {
  state = {
    hits: [],
    page: 1,
    isLoading: false,
		totalHits: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.props;

    if (searchQuery !== prevProps.searchQuery) {
      this.setState({ hits: [] });
      this.showMoreItems();
    }
  }

  showMoreItems = () => {
    const { searchQuery, isShowNotification, getNotificationNotFound, setError } =
      this.props;
    const { page } = this.state;

    isShowNotification();
    this.setState({ isLoading: true });

    imageApi
      .fetchImages(searchQuery, page)
      .then(response => {
        const { hits, total } = response.data;

        this.setState(prevState => {
          return {
            hits: [...prevState.hits, ...hits],
            page: prevState.page + 1,
						totalHits: total,
          };
        });

        getNotificationNotFound(total);
        this.scrollAfterRenderImg();
        setError(null);
      })
      .finally(() => {
        isShowNotification();
        this.setState({ isLoading: false });
      })
      .catch(error => setError(error));
  };

  scrollAfterRenderImg = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { hits, page, isLoading, totalHits } = this.state;
    const { searchQuery } = this.props;
		const showButton = searchQuery && page !== 1 && hits.length > 0 && hits.length !== totalHits;

    return (
      <>
        <ul className="ImageGallery">
          {hits.map(({ id, webformatURL, tags, largeImageURL }) => (
            <li className="ImageGalleryItem" key={id}>
              <ImageGalleryItem
                previewURL={webformatURL}
                tags={tags}
                largeImageURL={largeImageURL}
              />
            </li>
          ))}
        </ul>

        {isLoading && (
          <div className="wrapperButton">
            <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
          </div>
        )}
        {showButton && (
          <Button showMoreItems={this.showMoreItems} />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
	searchQuery: PropTypes.string.isRequired,
	isShowNotification: PropTypes.func.isRequired,
	getNotificationNotFound: PropTypes.func.isRequired,
	setError: PropTypes.func.isRequired
}

export default ImageGallery;
