import React from "react";
import { Link } from "react-router-dom";

const Browse = () => {
  return (
    <div className="z-20">
      {/* Main Heading */}
      <h1 className="text-center mt-[3em] text-[2em] font-bold lg:text-[3em]">
        Find Your Perfect Ride
      </h1>

      {/* Description Text */}
      <p className="text-center max-w-[80%] mx-auto text-sm text-black/70 mt-4">
        Browse our extensive inventory of cars, SUVs, and trucks to find the
        ideal vehicle that fits your style and budget.
      </p>

      {/* Browse All Cars Button */}
      <Link to="/cars">
        <div className="my-12 z-[10] max-w-[70%] md:max-w-[40%] lg:max-w-[30%] mx-auto text-center border border-[#3b1c32] p-4 hover:bg-[#3b1c32] hover:text-white transition-all duration-200 ease-in-out cursor-pointer font-medium">
          <p>Browse All Cars</p>
        </div>
      </Link>
    </div>
  );
};

export default Browse;
