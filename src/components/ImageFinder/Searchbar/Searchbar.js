// Модули
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handlerChangeInput = e => {
    const { value } = e.target;

    this.setState({ query: value });
  };
  handlerSearchItems = e => {
    e.preventDefault();
		const { query } = this.state;

    this.props.searchItems(query);
		this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <header className="Searchbar">
        <form className="SearchForm">
          <button
            type="submit"
            className="SearchForm-button"
            onClick={this.handlerSearchItems}
          >
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handlerChangeInput}
            value={query}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
	searchItems: PropTypes.func.isRequired,
}

export default Searchbar;
