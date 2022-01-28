import React from 'react';
import { Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

type Props = {
  children: React.ReactElement[] | null;
};

function Auth({ children }: Props) {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    loginWithRedirect();
  }

  return <Routes>{children}</Routes>;
}

export default Auth;
