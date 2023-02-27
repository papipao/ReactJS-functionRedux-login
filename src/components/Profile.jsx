import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);
  console.log(themeColor);
  return (
    <div style={{ color: themeColor }}>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>E-mail: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default Profile;
