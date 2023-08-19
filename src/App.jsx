import React, { useState } from "react";
import "./App.css";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [activeComponent, setActiveComponent] = useState("about");

  const handleNavLinkClick = (event) => {
    const target = event.target.getAttribute("data-target");
    setActiveComponent(target);
  };
  return (
    <>
      <h1 className="text-center">The Bark</h1>
      <Navbar handleNavLinkClick={handleNavLinkClick}/>
      <About />
    </>
  );
}

export default App;
