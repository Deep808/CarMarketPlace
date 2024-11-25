import React from "react";
import { brandsData } from "../utils/brandsData";

const Trust = () => {
  return (
    <div className="max-w-[80%] mx-auto">
      <h1 className="text-center text-[2em] font-bold">
        Trusted by Top Companies
      </h1>

      <div className="flex justify-between my-8">
        {brandsData.map((data) => (
          <img
            className="w-16 h-16 object-contain"
            key={data.id}
            src={data.image}
            alt="cars-logos"
          />
        ))}
      </div>
    </div>
  );
};

export default Trust;
