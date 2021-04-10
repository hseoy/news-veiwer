import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/fonts/fonts.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './i18n';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// reportWebVitals();
