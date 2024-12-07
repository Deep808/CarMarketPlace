import React from "react";
import { benefitsData } from "../utils/benefitsData"; // Importing the data containing the benefits information

const Benefits = () => {
  return (
    <div className="relative">
      {/* Background Img */}
      <img
        src="https://static.vecteezy.com/system/resources/previews/005/548/771/large_2x/modern-shape-automotive-car-sport-logo-icon-illustration-design-vector.jpg"
        className="absolute hidden md:hidden lg:block opacity-5 top-[-25em] z-[-10]"
        alt="Background"
      />

      {/* Section Title */}
      <h1 className="text-center text-[2em] font-bold my-12 lg:text-[3em]">
        Why Motrix?
      </h1>

      {/* Grid Layout for Benefits */}
      <div className="flex-col md:max-w-full md:grid md:grid-cols-2 md:gap-y-4 lg:max-w-[50%] lg:gap-x-0 mx-auto">
        {/* Mapping through benefits data and rendering each benefit */}
        {benefitsData.map((data) => (
          <div
            className="max-w-[60%] md:max-w-[80%] md:flex border p-6 rounded-lg border-[#6A1E55] my-6 flex-col justify-center items-center text-center mx-auto hover:scale-105 transition-all duration-400 ease-in-out cursor-pointer hover:shadow-md group"
            key={data.id}
          >
            {/* Icon for the benefit */}
            <span className="group-hover:animate-bounce text-[#3b1c32]">
              {data.icon}
            </span>

            {/* Title of the benefit */}
            <p className="my-4 font-semibold group-hover:underline text-[#6A1E55]">
              {data.title}
            </p>

            {/* Description of the benefit */}
            <p className="w-[70%] lg:w-[85%] text-[#A64D79]/80 text-sm mx-auto mt-4 mb-8">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
