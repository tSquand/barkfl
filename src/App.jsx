import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Events from "./components/Events.jsx";
import Menu from "./components/Menu.jsx";
import Catering from "./components/Catering.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [activeComponent, setActiveComponent] = useState("home");

  const handleNavLinkClick = (event) => {
    const target = event.target.getAttribute("data-target");
    setActiveComponent(target);
  };

  const handleSquareClick = (link) => {
    if (link === "brunch") {
      setActiveComponent("menu");

      setTimeout(() => {
        const brunchIframeElement = document.getElementById("brunchIframe");
        if (brunchIframeElement) {
          const brunchIframe = brunchIframeElement.offsetTop;
          window.scrollTo({ top: brunchIframe, behavior: "smooth" });
        }
      }, 0);
    } else {
      setActiveComponent(link);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const address = "507+All+Saints+St,+Tallahassee,+FL,+32303";

  return (
    <>
      <Navbar handleNavLinkClick={handleNavLinkClick} />
      {activeComponent === "home" && (
        <Home handleSquareClick={handleSquareClick} />
      )}
      {activeComponent === "menu" && <Menu />}
      {activeComponent === "catering" && <Catering />}
      {activeComponent === "events" && <Events />}
      <Footer />
    </>
  );
}

export default App;
