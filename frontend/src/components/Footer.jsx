import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#1A1A1D] rounded-tl-xl rounded-tr-xl text-white/80 mt-16 px-10 py-6 ">
      {/* Container for the main footer content */}
      <div className="max-w-[100%] md:max-w-[70%] mx-auto">
        {/* Header with site logo and social media links */}
        <div className="text-2xl font-bold flex items-center justify-between">
          <Link className="text-white" to="/">
            Motrix
          </Link>
          {/* Decorative line visible only on large screens */}
          <span className="hidden md:hidden lg:block w-[75%] bg-white/20 h-[1px]"></span>

          {/* Social media icons */}
          <div className="flex space-x-3 lg:mr-12">
            <FaFacebook className="hover:text-white transition-all duration-200 delay-75 ease-in-out cursor-pointer" />
            <FaInstagram className="hover:text-white transition-all duration-200 delay-75 ease-in-out cursor-pointer" />
            <FaXTwitter className="hover:text-white transition-all duration-200 delay-75 ease-in-out cursor-pointer" />
          </div>
        </div>

        {/* Location details */}
        <div className="mt-6">
          <h2 className="mb-4">Our Location</h2>
          <p className="text-white/50 text-sm">
            265 Yorkland Blvd, North York, ON M2J 1S5
          </p>
        </div>

        {/* Footer sections for stores, hours, and vehicle types */}
        <div className="lg:flex lg:w-[100%] lg:justify-between items-start">
          {/* Store locations and Sale hours */}
          <div className="my-6 lg:w-[50%] flex justify-between">
            <div>
              <h2 className="mb-4">Our Stores</h2>
              <ul className="text-white/50 text-sm">
                <li className="hover:text-white/70 cursor-pointer">Toronto</li>
                <li className="hover:text-white/70 cursor-pointer">Oshawa</li>
                <li className="hover:text-white/70 cursor-pointer">
                  New Liskeard
                </li>
                <li className="hover:text-white/70 cursor-pointer">Trenton</li>
                <li className="hover:text-white/70 cursor-pointer">Sudbury</li>
                <li className="hover:text-white/70 cursor-pointer">
                  Thunder Bay
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4">Sale Hours</h2>
              <ul className="text-white/50 text-sm">
                <li className="hover:text-white/70 cursor-pointer">
                  Monday – Friday: 09:00 AM – 09:00 PM
                </li>
                <li className="hover:text-white/70 cursor-pointer">
                  Saturday: 09:00 AM – 07:00 PM
                </li>
                <li className="hover:text-white/70 cursor-pointer">
                  Sunday: 11:00 AM – 02:00 PM
                </li>
              </ul>
            </div>
          </div>

          {/* Vehicle types and award badge */}
          <div className="relative my-6 flex items-center lg:w-[35%] justify-between">
            <div>
              <h2 className="mb-4">Vehicle Types</h2>
              <ul className="text-white/50 text-sm">
                <li className="hover:text-white/70 cursor-pointer">Sedans</li>
                <li className="hover:text-white/70 cursor-pointer">Coupes</li>
                <li className="hover:text-white/70 cursor-pointer">SUVs</li>
                <li className="hover:text-white/70 cursor-pointer">Trucks</li>
                <li className="hover:text-white/70 cursor-pointer">
                  Hatchbacks
                </li>
              </ul>
            </div>

            {/* Top Choice Award Badge */}
            <img
              className="absolute bottom-5 right-10 lg:w-[8em] w-[10em] object-contain"
              src="https://tadvantagesites-com.cdn-convertus.com/uploads/sites/648/2024/02/Top-Choice-Award.png"
              alt="top-choice-awards"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
