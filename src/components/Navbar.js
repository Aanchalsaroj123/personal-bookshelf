import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        BookShelf
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/bookshelf">My Bookshelf</Link>
      </div>
    </nav>
  );
};

export default Navbar;
