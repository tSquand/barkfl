import React, { useState } from "react";
import "./App.css";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Events from "./components/Events.jsx";
import Menu from "./components/Menu.jsx";
import Catering from "./components/Catering.jsx";
import Contact from "./components/Contact.jsx";
import Hours from "./components/Hours.jsx";

function App() {
  const [activeComponent, setActiveComponent] = useState("hours");

  const handleNavLinkClick = (event) => {
    const target = event.target.getAttribute("data-target");
    setActiveComponent(target);
  };

  const address = "507+All+Saints+St,+Tallahassee,+FL,+32303";

  return (
    <>
      <div className='text-center address-header'>
        <a
          className='custom-link'
          href={`https://www.google.com/maps/search/?api=1&query=${address}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          507 All Saints St, Tallahassee, FL 32301
        </a>
      </div>
      <Navbar handleNavLinkClick={handleNavLinkClick} />
      <h1 className='text-center main-title'>The Bark</h1>
      {activeComponent === "hours" && <Hours address={address} />}
      {activeComponent === "about" && <About />}
      {activeComponent === "menu" && <Menu />}
      {activeComponent === "catering" && <Catering />}
      {activeComponent === "events" && <Events />}
      {activeComponent === "contact" && <Contact />}
    </>
  );
}

export default App;
