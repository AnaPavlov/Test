import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import BrowserRouter from 'react-router-dom/BrowserRouter'

ReactDOM.render(<BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
