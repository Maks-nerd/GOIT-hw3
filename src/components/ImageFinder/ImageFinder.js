// Модули
import React, { Component } from 'react';

// Стили
import './styles.css';

// Компоненты
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Notification from './Notification';

class ImageFinder extends Component {
  state = {
    searchQuery: '',
    isShowNotification: false,
    notFound: false,
    error: null,
  };

  handlerSearchItems = query => {
    this.setState({ searchQuery: query });
  };

  toggleLoading = () => {
    this.setState(prevState => {
      return {
        isShowNotification: !prevState.isShowNotification,
      };
    });
  };

  showNotificationNotFound = total =>
    total === 0
      ? this.setState({ notFound: true })
      : this.setState({ notFound: false });

  setError = error => {
    this.setState({ error: error });
  };

  render() {
    const { searchQuery, isShowNotification, notFound, error } = this.state;

    return (
      <>
        <Searchbar searchItems={this.handlerSearchItems} />
        <ImageGallery
          searchQuery={searchQuery}
          isShowNotification={this.toggleLoading}
          getNotificationNotFound={this.showNotificationNotFound}
          setError={this.setError}
        />
        {notFound && !isShowNotification && !error && (
          <Notification message="По вашему запросу ничего не найдено!" />
        )}
        {error && !isShowNotification && (
          <Notification message={`Упс, что-то пошло не так -  ${error}`} />
        )}
      </>
    );
  }
}

export default ImageFinder;
