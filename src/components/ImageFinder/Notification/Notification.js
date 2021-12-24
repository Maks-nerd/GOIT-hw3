// Модули
import React from 'react';
import PropTypes from 'prop-types';

const Notofication = ({message}) => {
	return ( 
		<h1>{message}</h1>
	 );
}

Notofication.propTypes = {
	message: PropTypes.string.isRequired,
}
 
export default Notofication;