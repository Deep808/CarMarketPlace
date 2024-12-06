import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";

import { RiCloseFill } from "react-icons/ri";
import { LuMenu } from "react-icons/lu";
import "../App.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="font sticky top-0 bg-[#1A1A1D] text-white px-6 py-4 lg:px-8 lg:py-4 flex justify-between items-center z-50">
      <div className="flex items-center justify-between w-full lg:w-[80%] lg:flex lg:justify-between lg:items-center mx-auto z-80">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Link to="/">Motrix</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:w-[25%] lg:justify-between md:flex text-sm space-x-4">
          <Link to="/" className="hover:text-[#A64D79]">
            Home
          </Link>
          <Link to="/cars" className="hover:text-[#A64D79]">
            Car Listings
          </Link>
          <Link to="/about" className="hover:text-[#A64D79]">
            About
          </Link>
          <Link to="/contact" className="hover:text-[#A64D79]">
            Contact
          </Link>
        </div>

        {/* Icons and Mobile Menu Toggle */}
        <div className="flex space-x-4 items-center">
          <Link to="/add">
            <IoAddCircleOutline className="w-5 h-5 cursor-pointer hover:text-[#A64D79]" />
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <RiCloseFill className="w-6 h-6 cursor-pointer" />
            ) : (
              <LuMenu className="w-6 h-6 cursor-pointer" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "translate-y-0" : "-translate-y-[20em]"
        } absolute top-16 left-0 w-full bg-[#1A1A1D] text-white shadow-lg md:hidden transition-all duration-300 z-20`}
      >
        <div className="flex flex-col items-center space-y-8 py-4">
          <Link to="/" className="hover:text-[#A64D79]" onClick={toggleMenu}>
            Home
          </Link>
          <Link
            to="/cars"
            onClick={toggleMenu}
            className="hover:text-[#A64D79]"
          >
            Car Listings
          </Link>
          <Link
            to="/about"
            className="hover:text-[#A64D79]"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#A64D79]"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
