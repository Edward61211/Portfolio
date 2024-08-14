import React, { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";
import { PiCode } from "react-icons/pi";

const Navbar = () => {
  return (
    <nav className="fixed bottom-3 lg:bottom-8 w-full overflow-hidden z-[100]">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50 pointer-events-none">
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            className="cursor-pointer w-[55px] h-[55px] flex items-center justify-center pointer-events-auto"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer w-[55px] h-[55px] flex items-center justify-center pointer-events-auto"
          >
            <PiCode />
          </Link>
          <Link
            to="service"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer w-[55px] h-[55px] flex items-center justify-center pointer-events-auto"
          >
            <BsClipboardData />
          </Link>
          <Link
            to="work"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer w-[55px] h-[55px] flex items-center justify-center pointer-events-auto"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer w-[55px] h-[55px] flex items-center justify-center pointer-events-auto"
          >
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
