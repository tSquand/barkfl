function Navbar() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              The Bark
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Upcoming Events
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact us
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