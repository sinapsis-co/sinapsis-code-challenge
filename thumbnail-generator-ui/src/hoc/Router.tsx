import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Auth from './Auth';
import Home from '../components/Home/Home';
import Landing from '../components/Landing/Landing';
import NavBar from '../components/NavBar/NavBar';

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="*"
          element={
            <Auth>
              <Route path="/home" element={<Home />} />
              {/* <Route path="/search" element={<SearchContainer />} />
              <Route path="/characters/:id" element={<DetailsContainer />} />
              <Route path="/*" element={<NotFound />} /> */}
            </Auth>
          }
        />
        <Route path="/" element={<Landing />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
