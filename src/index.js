import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import styles from './index.module.css';

ReactDOM.render(<App className={styles}/>, document.getElementById('root'));
registerServiceWorker();
