import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link className='text-decoration-none text-light' to="/">Vehicle Managment</Link>
      </div>
      <div className="navbar-links">
        <Link to="/login">Logout</Link>
        {/* <Link to="/products">Products</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;