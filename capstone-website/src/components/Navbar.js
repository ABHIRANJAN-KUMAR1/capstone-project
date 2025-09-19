import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '10px', background: '#4CAF50', color: 'white' }}>
    <Link style={{ margin: '10px', color: 'white' }} to="/">Home</Link>
    <Link style={{ margin: '10px', color: 'white' }} to="/about">About</Link>
    <Link style={{ margin: '10px', color: 'white' }} to="/services">Services</Link>
    <Link style={{ margin: '10px', color: 'white' }} to="/profile">Profile</Link>
  </nav>
);

export default Navbar;
