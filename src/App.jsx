import React, { useState } from "react";
import "./App.css";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Events from "./components/Events.jsx";
import Menu from "./components/Menu.jsx";
import Catering from "./components/Catering.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  const [activeComponent, setActiveComponent] = useState("about");

  const handleNavLinkClick = (event) => {
    const target = event.target.getAttribute("data-target");
    setActiveComponent(target);
  };

  return (
    <>
      <div className='text-center address-header'>407 All Saints St</div>
      <h1 className='text-center main-title'>The Bark</h1>
      <Navbar handleNavLinkClick={handleNavLinkClick} />
      {activeComponent === "about" && <About />}
      {activeComponent === "menu" && <Menu />}
      {activeComponent === "catering" && <Catering />}
      {activeComponent === "events" && <Events />}
      {activeComponent === "contact" && <Contact />}
    </>
  );
}

export default App;
