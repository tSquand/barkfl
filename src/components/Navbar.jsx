import "./styles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-fixed'>
      <div className='container-fluid'>
        {/* Brand/logo */}
        <Link to='/' className='navbar-brand'>
          The Bark
        </Link>
        {/* Toggle button for mobile */}
        <button className='navbar-toggler' type='button' onClick={toggleNav}>
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* Collapsible content */}
        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}>
          <ul
            className={`navbar-nav me-auto mb-2 mb-lg-0 ${
              isNavOpen ? "centered-nav-items" : ""
            }`}
          >
            <li className='nav-item'>
              <Link to='/menu' className='nav-link' onClick={closeNav}>
                Menu
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/brunch' className='nav-link' onClick={closeNav}>
                Brunch
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/nightmenu' className='nav-link' onClick={closeNav}>
                Night Menu
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/catering' className='nav-link' onClick={closeNav}>
                Catering
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/events' className='nav-link' onClick={closeNav}>
                Events
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
