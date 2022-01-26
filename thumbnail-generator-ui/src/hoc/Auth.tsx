import React from 'react';
import { useLocation, Navigate, Routes } from 'react-router-dom';

type Props = {
  children: React.ReactElement | null;
};

function Auth({ children }: Props) {
  const location = useLocation();
  const navigateMemo = location.pathname;

  //   if (!auth) {
  //     return <Navigate to="/login" state={{ memory: navigateMemo }} />;
  //   }

  return <Routes>{children}</Routes>;
}

export default Auth;
