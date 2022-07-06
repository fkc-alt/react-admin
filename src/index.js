
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'antd/dist/antd.min.css';

import App from './App';
import store from './store';

process.env.NODE_ENV === 'development' && require('../mock/index');

//render to Page
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
)
