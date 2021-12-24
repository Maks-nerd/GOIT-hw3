// Модули
import React from 'react';

// Стили
import './Container.css';

const Container = ({children}) => {
	return ( 
		<div className="Container">
			{children}
		</div>
	 );
}
 
export default Container;
