import React from 'react';
import UserProfile from '../Aut0/UserProfile';

function User() {
  return (
    <div>
      <h1>User</h1>
      {UserProfile ? <UserProfile /> : <p>No user data</p>}
    </div>
  );
}

export default User;
