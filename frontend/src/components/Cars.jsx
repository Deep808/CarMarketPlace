import React, { useEffect } from "react";
import CarListings from "./CarListings";
import Footer from "./Footer";

const Car = () => {
  // Scrolls to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative font z-10">
        {/* Title overlaying the hero image */}
        <h1 className="absolute inset-0 flex justify-center items-center text-white font-bold text-[2em] lg:text-[4em] z-10">
          Car Listings
        </h1>
        {/* Hero image with a dark overlay */}
        <div className="relative">
          <img
            className="w-full h-[60vh] object-cover"
            src="https://images.unsplash.com/photo-1633507104426-f2be1293f5a2?q=80&w=2153&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Car Banner"
          />
          {/* Semi-transparent black overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>

      {/* Main Content: Car Listings */}
      <CarListings />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Car;
