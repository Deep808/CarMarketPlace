import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { vehiclesData } from "../utils/vehiclesData";
import Footer from "./Footer";

const EditCar = () => {
  // Extract the car ID from the URL parameters
  const { id } = useParams();

  // Find the specific car using the ID
  const car = vehiclesData.find((vehicle) => vehicle.id === parseInt(id));

  // Set up state for form data, initializing it with the car's current details
  const [formData, setFormData] = useState({
    make: car?.make || "",
    model: car?.model || "",
    year: car?.year || "",
    color: car?.color || "",
    kms: car?.kms || "",
    vin: car?.vin || "",
    price: car?.price || "",
    images: [],
    imageLinks: car?.imageLinks || ["", "", "", ""],
  });

  // Scroll to the top of the page on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle changes in text inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // Update image link inputs dynamically
  const handleImageLinkChange = (index, value) => {
    const updatedLinks = [...formData.imageLinks];
    updatedLinks[index] = value;
    setFormData({ ...formData, imageLinks: updatedLinks });
  };

  // Handle form submission (to update car details)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Car Details:", formData);
    // Add logic to update the car details in the database or state
  };

  // If the car is not found, display an error message
  if (!car) {
    return <div className="text-center mt-20">Car not found.</div>;
  }

  return (
    <>
      <div className="max-w-[90%] md:max-w-[70%] lg:max-w-[60%] mt-8 mx-auto">
        <h1 className="font text-[2em] lg:text-[3em] font-bold text-start">
          Edit Car Details
        </h1>
        <form onSubmit={handleSubmit} className="font mx-auto my-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Inputs for Car Attributes */}
            <div>
              <label className="block font-medium mb-1">Make</label>
              <input
                type="text"
                name="make"
                value={formData.make}
                onChange={handleInputChange}
                className="border border-[#6A1E55]/20 outline-none p-4 mt-1 block w-full rounded shadow-sm focus:border-[#6A1E55] focus:ring-[#6A1E55]"
              />
            </div>
            {/* Repeat for other fields like Model, Year, Color, etc. */}
            <div>
              <label className="block font-medium mb-1">Model</label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleInputChange}
                className="border border-[#6A1E55]/20 outline-none p-4 mt-1 block w-full rounded shadow-sm focus:border-[#6A1E55] focus:ring-[#6A1E55]"
              />
            </div>
            {/* More fields for numeric inputs */}
            <div>
              <label className="block font-medium mb-1">Year</label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                className="border border-[#6A1E55]/20 outline-none p-4 mt-1 block w-full rounded shadow-sm focus:border-[#6A1E55] focus:ring-[#6A1E55]"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Color</label>
              <input
                type="text"
                name="color"
                value={formData.color}
                onChange={handleInputChange}
                className="border border-[#6A1E55]/20 outline-none p-4 mt-1 block w-full rounded shadow-sm focus:border-[#6A1E55] focus:ring-[#6A1E55]"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">KMs</label>
              <input
                type="number"
                name="kms"
                value={formData.kms}
                onChange={handleInputChange}
                className="border border-[#6A1E55]/20 outline-none p-4 mt-1 block w-full rounded shadow-sm focus:border-[#6A1E55] focus:ring-[#6A1E55]"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">VIN#</label>
              <input
                type="text"
                name="vin"
                value={formData.vin}
                onChange={handleInputChange}
                className="border border-[#6A1E55]/20 outline-none p-4 mt-1 block w-full rounded shadow-sm focus:border-[#6A1E55] focus:ring-[#6A1E55]"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="border border-[#6A1E55]/20 outline-none p-4 mt-1 block w-full rounded shadow-sm focus:border-[#6A1E55] focus:ring-[#6A1E55]"
              />
            </div>
            {/* Section for Image Links */}
            <div>
              {[...Array(4)].map((_, index) => (
                <div key={index}>
                  <label className="block font-medium my-2">
                    Image Link {index + 1}
                  </label>
                  <input
                    type="text"
                    value={formData.imageLinks[index]}
                    onChange={(e) =>
                      handleImageLinkChange(index, e.target.value)
                    }
                    className="border border-[#6A1E55]/20 outline-none p-4 mt-1 block w-full rounded shadow-sm focus:border-[#6A1E55] focus:ring-[#6A1E55]"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full lg:w-1/4 lg:flex lg:justify-center mt-8 mx-auto p-4 bg-[#3B1C32] text-white font-medium shadow-sm cursor-pointer"
          >
            Save Changes
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default EditCar;
