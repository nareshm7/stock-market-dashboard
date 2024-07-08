import React from 'react';
import { FaHome, FaSearch, FaUser } from 'react-icons/fa';

const Header = () => {
  const userName = 'John Doe';
  const currentDate = new Date().toLocaleDateString();

  return (
    <header className="header">
      <h1>Hello, {userName}</h1>
      <p>{currentDate}</p>
      <nav className="nav-bar">
        <FaHome /> Home
        <FaSearch /> Search
        <FaUser /> Profile
      </nav>
    </header>
  );
};

export default Header;
