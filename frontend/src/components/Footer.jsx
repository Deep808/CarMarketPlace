import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black rounded-tl-xl rounded-tr-xl text-white/80 mt-16 px-10 py-6">
      <div className="text-2xl font-bold flex items-center justify-between">
        <Link className="text-white" to="/">
          Motrix
        </Link>

        <div className="flex space-x-3">
          <FaFacebook />
          <FaInstagram />
          <FaXTwitter />
        </div>
      </div>
      <div className="mt-6">
        <h2 className="mb-4">Our Location</h2>
        <p className="text-white/50 text-sm">
          265 Yorkland Blvd, North York, ON M2J 1S5
        </p>
      </div>

      <div className="my-6 flex justify-between">
        <div>
          <h2 className="mb-4">Our Stores</h2>
          <ul className="text-white/50 text-sm">
            <li>Toronto</li>
            <li>Oshawa</li>
            <li>New Liskeard</li>
            <li>Trenton</li>
            <li>Sudbury</li>
            <li>Thunder Bay</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4">Sale Hours</h2>
          <ul className="text-white/50 text-sm">
            <li>Monday – Friday: 09:00 AM – 09:00 PM</li>
            <li>Saturday: 09:00 AM – 07:00 PM</li>
            <li>Sunday: 11:00 AM – 02:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="relative flex items-center justify-between">
        <div>
          <h2 className="mb-4">Vehicle Types</h2>
          <ul className="text-white/50 text-sm">
            <li>Sedans</li>
            <li>Coupes</li>
            <li>SUVs</li>
            <li>Trucks</li>
            <li>Hatchbacks</li>
          </ul>
        </div>

        <img
          className="absolute bottom-5 right-10 w-[10em] object-contain"
          src="https://tadvantagesites-com.cdn-convertus.com/uploads/sites/648/2024/02/Top-Choice-Award.png"
          alt="top-choice-awards"
        />
      </div>
    </div>
  );
};

export default Footer;
