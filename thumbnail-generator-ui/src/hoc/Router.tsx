import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
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
            <Auth>
              <Route path="/generator" element={<Generator />} />
              {/* <Route path="/search" element={<SearchContainer />} />
              <Route path="/characters/:id" element={<DetailsContainer />} />
              <Route path="/*" element={<NotFound />} /> */}
            </Auth>
          }
        />
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
