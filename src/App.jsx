import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Events from "./components/Events.jsx";
import Menu from "./components/Menu.jsx";
import Brunch from "./components/Brunch.jsx";
import NightMenu from "./components/NightMenu.jsx";
import Catering from "./components/Catering.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const address = "507+All+Saints+St,+Tallahassee,+FL,+32303";

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/brunch' element={<Brunch />}></Route>
        <Route path='/nightmenu' element={<NightMenu />}></Route>
        <Route path='/catering' element={<Catering />}></Route>
        <Route path='/events' element={<Events />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
