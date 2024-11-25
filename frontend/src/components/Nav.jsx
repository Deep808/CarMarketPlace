import React from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { RiMenu3Fill } from "react-icons/ri";

const Nav = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 lg:px-8 lg:py-4 flex justify-between items-center">
      <div className="flex items-center justify-between w-full lg:w-[80%] lg:flex lg:justify-between lg:items-center mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Motrix</Link>
        </div>

        {/* Links */}
        <div className="hidden lg:w-[25%] lg:justify-between md:flex text-sm space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>

        <div className="flex space-x-4 items-center">
          <div>
            <BiUser className="w-5 h-5 cursor-pointer hover:text-white/80" />
          </div>
          {/* Search Bar
      <div className="flex items-center space-x-2">
      <input
      type="text"
      placeholder="Search cars..."
      className="px-2 py-1 rounded-md text-black"
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md">
      Search
      </button>
      </div> */}

          {/* Mobile Menu */}
          <div className="md:hidden">
            <RiMenu3Fill className="w-5 h-5" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
