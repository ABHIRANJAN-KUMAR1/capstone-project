import React, { useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState({ name: '', email: '' });

  return (
    <div>
      <input placeholder="Name" value={user.name} onChange={e => setUser({...user, name: e.target.value})} />
      <input placeholder="Email" value={user.email} onChange={e => setUser({...user, email: e.target.value})} />
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
