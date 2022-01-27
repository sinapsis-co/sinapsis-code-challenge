import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import './App.css';
import Router from './hoc/Router';

const domain: string = process.env.REACT_APP_AUTH0_DOMAIN || '';
const clientId: string = process.env.REACT_APP_AUTH0_CLIENT_ID || '';

function App() {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <Router />
    </Auth0Provider>
  );
}

export default App;
