import React from "react";
import Logo2 from "../assets/Logo2.png";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" className="block">
            <img
              src={Logo2}
              alt="logo"
              className="w-40 pointer-events-auto z-[99] relative transition-all duration-300 ease-in-out hover:scale-110 md:hover:scale-125"
            />
          </a>
          <button className="btn btn-sm z-[99]">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
