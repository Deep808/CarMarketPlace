import React from "react";
import { Link } from "react-router-dom";

const Browse = () => {
  return (
    <div>
      <h1 className="text-center mt-[3em] text-[2em] font-bold">
        Find Your Perfect Ride
      </h1>

      <p className="text-center max-w-[80%] mx-auto text-sm text-black/70 mt-4">
        Browse our extensive inventory of cars, SUVs, and trucks to find the
        ideal vehicle that fits your style and budget.
      </p>
      <div className="my-12 max-w-[70%] mx-auto text-center border border-black p-4 ">
        <Link to="/cars">Browse All Cars</Link>
      </div>
    </div>
  );
};

export default Browse;
