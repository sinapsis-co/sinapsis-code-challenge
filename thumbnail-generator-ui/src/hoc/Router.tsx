import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Auth from './Auth';
import Home from '../components/Home/Home';
import Generator from '../components/Generator/Generator';
import NavBar from '../components/NavBar/NavBar';


function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="*"
          element={
            <Auth0Provider
              domain="YOUR_DOMAIN"
              clientId="YOUR_CLIENT_ID"
              redirectUri={window.location.origin}
            >
              <Route path="/home" element={<Home />} />
              {/* <Route path="/search" element={<SearchContainer />} />
              <Route path="/characters/:id" element={<DetailsContainer />} />
              <Route path="/*" element={<NotFound />} /> */}
            </Auth0Provider>
          }
        />
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
