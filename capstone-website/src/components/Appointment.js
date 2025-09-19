import React, { useState } from 'react';

const Appointment = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${name} on ${date}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default Appointment;
