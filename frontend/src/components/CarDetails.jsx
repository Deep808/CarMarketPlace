import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/Ratings.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Footer from "./Footer";

const CarDetails = () => {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState({});
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/cars/${id}`
        );
        setCarDetails(response.data);
      } catch (error) {
        console.log("Error from single details car page: " + error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className="font max-w-[100%] md:max-w-[80%] lg:max-w-[80%] mx-auto text-center mt-6">
        <div className="max-w-[80%] mx-auto flex items-center">
          <h1 className="text-[2em] lg:text-[3em] font-bold text-left">
            {carDetails.model}
          </h1>
        </div>

        <div className="lg:flex lg:items-center lg:max-w-[90%] mx-auto">
          {/* CAR CAROUSAL  */}
          {/* <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper lg:flex-[0.7] cursor-pointer"
          >
            <SwiperSlide>
              <div className="rounded-lg p-6 mx-auto">
                <img
                  className="w-full md:max-w-[90%] mx-auto object-cover rounded-lg"
                  src="https://images.unsplash.com/photo-1636060889550-20762f149c5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image-1"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg p-6 mx-auto">
                <img
                  className="w-full md:max-w-[90%] mx-auto object-cover rounded-lg"
                  src="https://images.unsplash.com/photo-1636060889550-20762f149c5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image-1"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg p-6 mx-auto">
                <img
                  className="w-full md:max-w-[90%] mx-auto object-cover rounded-lg"
                  src="https://images.unsplash.com/photo-1636060889550-20762f149c5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image-1"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg p-6 mx-auto">
                <img
                  className="w-full md:max-w-[90%] mx-auto object-cover rounded-lg"
                  src="https://images.unsplash.com/photo-1636060889550-20762f149c5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image-1"
                />
              </div>
            </SwiperSlide>
          </Swiper> */}
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper lg:flex-[0.7] cursor-pointer"
          >
            {carDetails.images?.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-lg p-6 mx-auto">
                  <img
                    className="w-full md:max-w-[90%] mx-auto object-cover rounded-lg"
                    src={image}
                    alt={`image-${index + 1}`} // Dynamic alt text
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CAR FINANCING OPTIONS  */}
          <div className="max-w-[80%] mx-auto space-y-4 lg:flex-[0.3]">
            <p className="border border-[#3B1C32] p-4 text-[1.2em] text-center hover:bg-[#3B1C32] hover:text-white cursor-pointer">
              Book a Test Drive
            </p>
            <p className="border border-[#3B1C32] p-4 text-[1.2em] text-center hover:bg-[#3B1C32] hover:text-white cursor-pointer">
              Get Financing
            </p>
            <p className="border border-[#3B1C32] p-4 text-[1.2em] text-center hover:bg-[#3B1C32] hover:text-white cursor-pointer">
              Reserve Now
            </p>
            <p className="border border-[#3B1C32] p-4 text-[1.2em] text-center hover:bg-[#3B1C32] hover:text-white cursor-pointer">
              Value for Trade
            </p>
          </div>
        </div>

        {/* CAR INFO  */}
        {/* <div className="max-w-[80%] mx-auto lg:max-w-[50%]">
          <h1 className="text-[2em] lg:text-[3em] font-bold mt-12 mb-6 text-left">
            Vehicle Info
          </h1>

          <div className="space-y-6">
            <div className="relative flex justify-between">
              <p>Make</p>
              <p>Canada</p>
              <span className="absolute w-full -bottom-2 bg-black/20 h-[1px]"></span>
            </div>

            <div className="relative flex justify-between">
              <p>Model</p>
              <p>3</p>
              <span className="absolute w-full -bottom-2 bg-black/20 h-[1px]"></span>
            </div>
            <div className="relative flex justify-between">
              <p>Year</p>
              <p>2024</p>
              <span className="absolute w-full -bottom-2 bg-black/20 h-[1px]"></span>
            </div>
            <div className="relative flex justify-between">
              <p>Color</p>
              <p>White</p>
              <span className="absolute w-full -bottom-2 bg-black/20 h-[1px]"></span>
            </div>
            <div className="relative flex justify-between">
              <p>VIN</p>
              <p>WBAKS4C55CD123456</p>
              <span className="absolute w-full -bottom-2 bg-black/20 h-[1px]"></span>
            </div>
            <div className="relative flex justify-between">
              <p>Price</p>
              <p className="font-bold text-[1.5em]">$60,000</p>
              <span className="absolute w-full -bottom-2 bg-black/20 h-[1px]"></span>
            </div>
          </div>
        </div> */}
        <div className="max-w-[80%] mx-auto lg:max-w-[50%]">
          <h1 className="text-[3em] font-bold mt-12 mb-6 text-left">
            Vehicle Info
          </h1>

          <div className="space-y-6">
            <div className="relative flex justify-between">
              <p>Make</p>
              <p>{carDetails.make}</p>
              <span className="absolute w-full -bottom-2 bg-black/20 h-[1px]"></span>
            </div>

            <div className="relative flex justify-between">
              <p>Model</p>
              <p>{carDetails.model}</p>
              <span className="absolute w-full -bottom-2 bg-black/20 h-[1px]"></span>
            </div>
            <div className="relative flex justify-between">
              <p>Year</p>
              <p>{carDetails.year}</p>
              <span className="absolute w-full -bottom-2 bg-black/20 h-[1px]"></span>
            </div>
            <div className="relative flex justify-between">
              <p>Color</p>
              <p>{carDetails.color}</p>
              <span className="absolute w-full -bottom-2 bg-black/20 h-[1px]"></span>
            </div>
            <div className="relative flex justify-between">
              <p>VIN</p>
              <p>{carDetails.vin}</p>
              <span className="absolute w-full -bottom-2 bg-black/20 h-[1px]"></span>
            </div>
            <div className="relative flex justify-between">
              <p>Price</p>
              <p className="font-bold text-[1.5em]">$ {carDetails.price}</p>
              <span className="absolute w-full -bottom-2 bg-black/20 h-[1px]"></span>
            </div>
          </div>
        </div>

        {/* DESCRIPTION  */}
        <div className="max-w-[80%] mx-auto text-left lg:max-w-[50%]">
          <h1 className="text-[2em] lg:text-[3em] font-bold mt-12 mb-6">
            Description
          </h1>
          <p>{carDetails.description}</p>
        </div>

        {/* TERMS  */}
        <div className="max-w-[80%] mx-auto text-left lg:max-w-[50%]">
          <h1 className="text-[2em] lg:text-[3em] font-bold mt-12 mb-6">
            *Terms & Conditions
          </h1>
          <p className="opacity-50">
            The {carDetails.make} {carDetails.model} is sold "as-is" with no
            warranties beyond the manufacturer’s. Payment must be made in full,
            and ownership is transferred upon receipt. The buyer assumes
            responsibility for inspection and any future issues.
          </p>
        </div>

        <div className="max-w-[80%] mx-auto mt-[3em] lg:w-1/4 hover:cursor-pointer">
          <p className="border font-medium border-[#3B1C32] p-4 text-[1.2em] text-center bg-[#3B1C32] text-white">
            Buy Now!
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CarDetails;
