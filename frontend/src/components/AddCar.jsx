import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AddCar = () => {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    kilometers: 0,
    vin: "",
    price: "",
    images: [],
    description: ""
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  // Scroll to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle changes in text input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Dynamically update the corresponding field in the form data
  };

  // Handle changes in image link fields
  const handleImageLinkChange = (index, value) => {
    const updatedLinks = [...formData.images];
    updatedLinks[index] = value; // Update the specific image link at the given index
    setFormData({ ...formData, images: updatedLinks });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsModalOpen(true); // Open the modal immediately
    
    try{
      const response = await axios.post('http://localhost:5000/api/cars/', formData);
      if(response.status === 201){
        console.log("Car Added successfully.");
        setTimeout(() => {
          navigate("/cars"); // Navigate after a delay to keep the modal visible for a short time
        }, 2000); // Adjust this delay as necessary
      }
    }
    catch(error){
      console.log('error in adding car: ' + error);
    }
    
  };

  return (
    <>
      <div className="max-w-[90%] md:max-w-[70%] lg:max-w-[60%] mt-8 mx-auto">
        {/* Page title */}
        <h1 className="font text-[2em] lg:text-[3em] font-bold text-start">
          Add a New Car
        </h1>

        {/* Car details form */}
        <form onSubmit={handleSubmit} className="font mx-auto my-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Input fields for car details */}
            <div>
              <label className="block font-medium mb-1">Make</label>
              <input
                type="text"
                name="make"
                value={formData.make}
                onChange={handleInputChange}
                placeholder="Enter Car Make"
                className="border border-[#6A1E55]/20 outline-none p-4 mt-1 block w-full rounded shadow-sm focus:border-[#6A1E55] focus:ring-[#6A1E55]"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Model</label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleInputChange}
                placeholder="Enter Car Model"
                className="border border-[#6A1E55]/20 outline-none p-4 mt-1 block w-full rounded shadow-sm focus:border-[#6A1E55] focus:ring-[#6A1E55]"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Year</label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                placeholder="Enter Year"
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
                placeholder="Enter Color"
                className="border border-[#6A1E55]/20 outline-none p-4 mt-1 block w-full rounded shadow-sm focus:border-[#6A1E55] focus:ring-[#6A1E55]"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">KMs</label>
              <input
                type="number"
                name="kilometers"
                value={formData.kilometers}
                onChange={handleInputChange}
                placeholder="Enter Kilometers"
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
                placeholder="Enter VIN#"
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
                placeholder="Enter Price"
                className="border border-[#6A1E55]/20 outline-none p-4 mt-1 block w-full rounded shadow-sm focus:border-[#6A1E55] focus:ring-[#6A1E55]"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Description</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter Description"
                className="border border-[#6A1E55]/20 outline-none p-4 mt-1 block w-full rounded shadow-sm focus:border-[#6A1E55] focus:ring-[#6A1E55]"
              />
            </div>

            <div>
              {/* Dynamic fields for entering image links */}
              {[...Array(4)].map((_, index) => (
                <div key={index}>
                  <label className="block font-medium my-2">
                    Image Link {index + 1}
                  </label>
                  <input
                    type="text"
                    value={formData.images[index]}
                    onChange={(e) =>
                      handleImageLinkChange(index, e.target.value)
                    }
                    placeholder={`Enter Image Link ${index + 1}`}
                    className="border border-[#6A1E55]/20 outline-none p-4 mt-1 block w-full rounded shadow-sm focus:border-[#6A1E55] focus:ring-[#6A1E55]"
                  />
                </div>
              ))}
              {/* Example for image link format */}
              <small className="block text-gray-500 mt-4">
                Example: https://example.com/image1.jpg
              </small>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full lg:w-1/4 lg:flex lg:justify-center mt-8 mx-auto p-4 bg-[#3B1C32] text-white font-medium shadow-sm cursor-pointer"
          >
            Add Car
          </button>
        </form>
      </div>

      {/* Footer component */}
      <Footer />
    </>
  );
};

export default AddCar;
