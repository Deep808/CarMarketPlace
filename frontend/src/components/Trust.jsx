import React from "react";
import { brandsData } from "../utils/brandsData";

const Trust = () => {
  return (
    <div className="relative max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto z-10">
      {/* Section title */}
      <h1 className="text-center text-[2em] font-bold mt-12 lg:mt-12 lg:text-[3em]">
        Trusted by Top Companies
      </h1>

      {/* Logos of trusted brands */}
      <div className="max-w-[90%] md:max-w-full mx-auto flex justify-between my-8 md:mt-16">
        {brandsData.map((data) => (
          <img
            // Each brand logo with hover effect
            className="w-14 h-14 md:w-24 md:h-24 object-contain hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out"
            key={data.id} // Unique key for each brand logo
            src={data.image}
            alt="cars-logos"
          />
        ))}
      </div>
    </div>
  );
};

export default Trust;
