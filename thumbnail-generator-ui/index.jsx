
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';

ReactDOM.render(
  <BrowserRouter>
    <App style={{height: '100vh'}}/>
  </BrowserRouter>,
  document.getElementById('app')
);