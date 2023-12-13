import React, { useState } from "react";
import "./App.css";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Events from "./components/Events.jsx";
import Menu from "./components/Menu.jsx";
import Catering from "./components/Catering.jsx";
import Contact from "./components/Contact.jsx";
import Hours from "./components/Hours.jsx";
import SplashModal from "./components/SplashModal.jsx";

function App() {
  const [showModal, setShowModal] = useState(true);
  const [activeComponent, setActiveComponent] = useState("hours");

  const handleNavLinkClick = (event) => {
    const target = event.target.getAttribute("data-target");
    setActiveComponent(target);
    setShowModal(false);
  };

  const address = "507+All+Saints+St,+Tallahassee,+FL,+32303";

  return (
    <>
      {showModal && (
        <SplashModal onClose={() => setShowModal(false)}></SplashModal>
      )}
      <Navbar handleNavLinkClick={handleNavLinkClick} />
      {activeComponent === "hours" && <Hours address={address} />}
      {activeComponent === "menu" && <Menu />}
      {activeComponent === "catering" && <Catering />}
      {activeComponent === "events" && <Events />}
      {activeComponent === "contact" && <Contact address={address} />}
    </>
  );
}

export default App;
