import React from "react";
import { RiStarSFill } from "react-icons/ri";

const Ratings = () => {
  return (
    <div className="max-w-[80%] mx-auto text-center">
      <h1 className="text-center mt-[3em] text-[2em] font-bold">
        See What Our Customers Think
      </h1>

      <div className="max-w-[80%] border border-black rounded-lg p-6 my-4 mx-auto">
        <img src="" alt="" />
        <div className="mb-6">
          <p>Deep</p>
          <div className="flex w-fit mx-auto">
            <RiStarSFill className="w-6 h-6 mx-auto text-yellow-300" />
            <RiStarSFill className="w-6 h-6 mx-auto text-yellow-300" />
            <RiStarSFill className="w-6 h-6 mx-auto text-yellow-300" />
            <RiStarSFill className="w-6 h-6 mx-auto text-yellow-300" />
          </div>
        </div>
        <p>
          Great experience! The team made everything easy and smooth. Highly
          recommend!
        </p>
      </div>
    </div>
  );
};

export default Ratings;
