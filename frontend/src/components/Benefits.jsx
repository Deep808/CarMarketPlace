import React from "react";
import { benefitsData } from "../utils/benefitsData";

const Benefits = () => {
  return (
    <div>
      <h1 className="text-center text-[2em] font-bold my-12">Why Motrix?</h1>
      {benefitsData.map((data) => (
        <div
          className="max-w-[80%] border p-6 rounded-lg border-black my-14 flex-col justify-center items-center text-center mx-auto"
          key={data.id}
        >
          <span>{data.icon}</span>
          <p className="my-4">{data.title}</p>
          <p className="w-[70%] text-black/70 text-sm mx-auto mt-4 mb-8">
            {data.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
