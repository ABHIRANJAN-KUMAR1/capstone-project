import React from 'react';
import Navbar from '../components/Navbar';
import Appointment from '../components/Appointment';
import Notification from '../components/Notification';
import Reviews from '../components/Reviews';

const Home = () => (
  <div>
    <Navbar />
    <h1>Welcome to Our Service</h1>
    <Notification message="New update available!" />
    <Appointment />
    <Reviews />
  </div>
);

export default Home;
