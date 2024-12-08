import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
// import { vehiclesData } from "../utils/vehiclesData";
import { IoInformationCircle } from "react-icons/io5";
import axios from 'axios';

const CarListings = () => {
  // State management for filter type and value
  const [vehiclesData, setVehiclesData] = useState([{}]);
  const [filterType, setFilterType] = useState("price");
  const [filterValue, setFilterValue] = useState("");
  const [searchCriteria, setSearchCriteria] = useState({
    type: "price",
    value: "",
  });

  const navigate = useNavigate();

  // Handlers for navigation
  const handleMoreDetails = (id) => {
    navigate(`/car/${id}`);
  };

  const handleEditDetails = (id) => {
    navigate(`/edit/${id}`);
  };

  // Filter vehicles based on search criteria
  const filteredVehicles = vehiclesData.filter((vehicle) => {
    if (!searchCriteria.value) return true; // Show all if no filter value
    return vehicle[searchCriteria.type] <= searchCriteria.value; // Filter by price or kilometers
  });

  // Update search criteria when the user clicks search
  const handleSearch = () => {
    setSearchCriteria({ type: filterType, value: filterValue });
  };

  useEffect( () => {
    // Fetch all the cars from the database and display it on this page.
    const fetchData = async() => {
      try{
        const response = await axios.get('http://localhost:5000/api/cars/');
        console.log(response);
        setVehiclesData(response.data);
      } 
      catch(error){
        console.log('error from frontend side: '+ error);
      }           
    }
    fetchData();
    
  },[])

  return (
    <div className="font max-w-[80%] lg:max-w-full mx-auto my-10">
      {/* Filter Section */}
      <div className="mb-[8em] flex-col text-center gap-4 items-center">
        <div>
          <label htmlFor="filterType" className="text-sm mr-2">
            Filter By:
          </label>
          <select
            id="filterType"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="border outline-none text-white hover:bg-[#6A1E55] bg-[#3B1C32] rounded px-2 py-1"
          >
            <option value="price">Price</option>
            <option value="kms">Kilometers</option>
          </select>
        </div>
        <div className="w-fit mx-auto my-6 border border-black">
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            type="text"
            placeholder={`Enter max ${filterType}`}
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            className="rounded px-2 py-1 outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-black text-white px-4 py-2 hover:bg-[#6A1E55]"
          >
            Search
          </button>
        </div>
      </div>

      {/* Vehicle Grid */}
      <div className="flex flex-col items-center justify-center">
        {filteredVehicles.length > 0 ? (
          <div className="md:grid md:grid-cols-2 md:gap-x-6 lg:grid-cols-4 lg:max-w-[80%] mx-auto">
            {filteredVehicles.slice(0, 16).map((vehicle) => (
              <div
                key={vehicle.id}
                className="border rounded-lg overflow-hidden shadow-md border-black mb-8"
              >
                {/* Vehicle Image */}
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full object-cover mb-3"
                />
                {/* Vehicle Details */}
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{vehicle.name}</h2>
                  <p>{vehicle.kms} KM</p>
                  <p className="font-semibold text-lg">${vehicle.price}</p>
                </div>
                {/* Actions */}
                <div className="flex items-center md:justify-center justify-end">
                  <div
                    onClick={() => handleMoreDetails(vehicle.id)}
                    className="bg-[#6A1E55] hover:bg-[#3B1C32] cursor-pointer text-white w-fit p-3 mx-4 mb-4 rounded-xl"
                  >
                    <IoInformationCircle />
                  </div>
                  <div
                    onClick={() => handleEditDetails(vehicle.id)}
                    className="bg-[#6A1E55] hover:bg-[#3B1C32] cursor-pointer text-white w-fit p-3 mx-4 mb-4 rounded-xl"
                  >
                    <MdEdit />
                  </div>
                  <div className="bg-[#6A1E55] hover:bg-[#3B1C32] cursor-pointer text-white w-fit p-3 mx-4 mb-4 rounded-xl">
                    <MdDelete />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Display message if no vehicles are found
          <div className="flex items-center justify-center my-16 w-full">
            <p className="text-center text-lg text-gray-500">Not Found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarListings;
