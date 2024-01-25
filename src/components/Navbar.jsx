import "./styles.css";
import React, { useState } from "react";

function Navbar({ handleNavLinkClick }) {
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
        <a
          className='navbar-brand'
          href='#'
          data-target='hours'
          onClick={handleNavLinkClick}
        >
          The Bark
        </a>

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
              <a
                className='nav-link'
                href='#'
                data-target='menu'
                onClick={(e) => {
                  handleNavLinkClick(e);
                  closeNav();
                }}
              >
                Menu
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='#'
                data-target='catering'
                onClick={(e) => {
                  handleNavLinkClick(e);
                  closeNav();
                }}
              >
                Catering
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='#'
                data-target='events'
                onClick={(e) => {
                  handleNavLinkClick(e);
                  closeNav();
                }}
              >
                Upcoming Events
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
