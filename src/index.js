// Модули
import React from 'react';
import ReactDOM from 'react-dom';

// Компоненты
import App from './App';
import Container from './components/Container/Container';


ReactDOM.render(
  <React.StrictMode>
		<Container>
    	<App />
		</Container>
  </React.StrictMode>,
  document.getElementById('root')
);
