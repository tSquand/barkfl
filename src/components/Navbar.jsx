import "./styles.css";

function Navbar({ handleNavLinkClick }) {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href='#'
                  data-target='hours'
                  onClick={handleNavLinkClick}
                >
                  Hours & Location
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href='#'
                  data-target='about'
                  onClick={handleNavLinkClick}
                >
                  About Us
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href='#'
                  data-target='menu'
                  onClick={handleNavLinkClick}
                >
                  Menu
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href='#'
                  data-target='catering'
                  onClick={handleNavLinkClick}
                >
                  Catering
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href='#'
                  data-target='events'
                  onClick={handleNavLinkClick}
                >
                  Upcoming Events
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href='#'
                  data-target='contact'
                  onClick={handleNavLinkClick}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
