import React from 'react';

const Notification = ({ message }) => (
  <div style={{ background: '#fffae6', padding: '10px', border: '1px solid #ffd700', margin: '10px 0' }}>
    {message}
  </div>
);

export default Notification;
