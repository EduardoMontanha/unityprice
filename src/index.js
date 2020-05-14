import React from 'react';
import ReactDOM from 'react-dom';
import './style/reset.css';
import './style/style.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
