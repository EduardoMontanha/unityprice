import React from 'react';
import ReactDOM from 'react-dom';

import './assets/style/reset.css';
import './assets/style/flags.css';
import './assets/style/style.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
