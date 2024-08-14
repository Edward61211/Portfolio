import React, { useState } from "react";
import About from "./components/About.jsx";
import Banner from "./components/Banner.jsx";
import Contact from "./components/Contact.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Service from "./components/Service.jsx";
import Work from "./components/Work.jsx";
import { Boxes } from "./components/BoxBackground.jsx";
import { cn } from "./lib/utilis.jsx";

function App() {
  return (
    <div className="bg-gradient-to-br from-teal-400 via-fuchsia-300 to-rose-300 bg-no-repeat bg-cover overflow-hidden">
      <Boxes />
      <div className="relative">
        <Header />
        <Banner />
        <About />
        <Service />
        <Work />
        <Contact />
        <Navbar />
      </div>
      <div className="md:hidden block">
        <div className="h-[200px]"></div>
      </div>
    </div>
  );
}

export default App;
