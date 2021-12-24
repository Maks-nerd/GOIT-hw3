// Модули
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  handlerClickBtn = e => {
    this.props.showMoreItems();
  };

  render() {
    return (
      <div className="wrapperButton">
        <button type="button" className="Button" onClick={this.handlerClickBtn}>
          Load more
        </button>
      </div>
    );
  }
}

Button.propTypes = {
	showMoreItems: PropTypes.func.isRequired
}

export default Button;
