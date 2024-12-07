import { RiStarSFill } from "react-icons/ri"; // Importing the star icon from react-icons
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/Ratings.css"; // Custom styles for the Ratings component

// Import required modules for Swiper functionality
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Ratings = () => {
  return (
    <div className="relative max-w-[90%] mx-auto text-center cursor-pointer">
      {/* Background Image for Decoration */}
      <img
        className="absolute hidden md:hidden lg:block w-[100%] opacity-30 top-1/2 -translate-x-1/2 right-0 -translate-y-1/2 z-[-10]"
        src="assets/images/confetti.svg" // Background confetti image for decoration
        alt=""
      />

      {/* Heading */}
      <h1 className="text-center mt-[3em] text-[2em] font-bold lg:text-[3em]">
        See What Our Customers Think!
      </h1>

      {/* Swiper Component for Car Ratings */}
      <Swiper
        spaceBetween={30} // Space between slides
        centeredSlides={true} // Centers the active slide
        autoplay={{
          delay: 2500, // Delay between slides
          disableOnInteraction: false, // Keeps autoplay running after interaction
        }}
        // Uncomment pagination and navigation for functionality
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]} // Enables Autoplay, Pagination, and Navigation modules
        className="mySwiper"
      >
        {/* Each SwiperSlide contains a customer review */}
        <SwiperSlide>
          <div className="max-w-[80%] md:max-w-[55%] lg:max-w-[40%] md:mt-16 border border-black rounded-lg p-6 my-4 mx-auto">
            {/* Customer Avatar */}
            <div className="w-12 h-12 object-contain mx-auto my-6">
              <img
                className="w-6 h-6 object-contain rounded-full"
                src="https://media-yyz1-1.cdn.whatsapp.net/v/t61.24694-24/383446220_2423492824507613_4818718044096107900_n.jpg?ccb=11-4&oh=01_Q5AaIN-dJa9jlETeXweXdYgIlELpwXOrhM-bGWh5pKdTXjQ9&oe=6759B43C&_nc_sid=5e03e0&_nc_cat=100"
                alt="image-1"
              />
            </div>
            {/* Customer Name and Rating */}
            <div className="mb-6">
              <p>Deep</p>
              <div className="flex w-fit mx-auto">
                {/* Stars Rating */}
                <RiStarSFill className="w-6 h-6 mx-auto text-yellow-300" />
                <RiStarSFill className="w-6 h-6 mx-auto text-yellow-300" />
                <RiStarSFill className="w-6 h-6 mx-auto text-yellow-300" />
                <RiStarSFill className="w-6 h-6 mx-auto text-yellow-300" />
                <RiStarSFill className="w-6 h-6 mx-auto text-yellow-300" />
              </div>
            </div>
            {/* Review Text */}
            <p className="lg:text-sm text-xs">
              Great experience! The team made everything easy and smooth. Highly
              recommend!
            </p>
          </div>
        </SwiperSlide>

        {/* Additional SwiperSlides for other reviews */}
        <SwiperSlide>
          <div className="max-w-[80%] md:max-w-[55%] lg:max-w-[40%] md:mt-16 border border-black rounded-lg p-6 my-4 mx-auto">
            <div className="w-12 h-12 object-contain mx-auto my-6">
              <img
                className="w-6 h-6 object-contain rounded-full"
                src="https://media-yyz1-1.cdn.whatsapp.net/v/t61.24694-24/370322261_826231685839461_8974177174015290051_n.jpg?ccb=11-4&oh=01_Q5AaIC79MXbANpLmEPkLtrV3P-IcyWDCqLrJKsX18jVu9n2l&oe=675780D7&_nc_sid=5e03e0&_nc_cat=104"
                alt="image-1"
              />
            </div>
            <div className="mb-6">
              <p>Deep</p>
              <div className="flex w-fit mx-auto">
                <RiStarSFill className="w-6 h-6 mx-auto text-yellow-300" />
                <RiStarSFill className="w-6 h-6 mx-auto text-yellow-300" />
                <RiStarSFill className="w-6 h-6 mx-auto text-yellow-300" />
                <RiStarSFill className="w-6 h-6 mx-auto text-yellow-300" />
              </div>
            </div>
            <p className="lg:text-sm text-xs">
              Motrix is fast, simple, reliable, and easy to use. Highly
              recommend!
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="max-w-[80%] md:max-w-[55%] lg:max-w-[40%] md:mt-16 border border-black rounded-lg p-6 my-4 mx-auto">
            <div className="w-12 h-12 object-contain mx-auto my-6">
              <img
                className="w-6 h-6 object-contain rounded-full"
                src="https://media-yyz1-1.cdn.whatsapp.net/v/t61.24694-24/429271349_286903661143261_4796659492781454776_n.jpg?ccb=11-4&oh=01_Q5AaIIpOJMR8bmLCuVa5TArstX1VXhpIZ9It4b1Mu3GAekfR&oe=67577593&_nc_sid=5e03e0&_nc_cat=100"
                alt="image-1"
              />
            </div>
            <div className="mb-6">
              <p>Jainam</p>
              <div className="flex w-fit mx-auto">
                <RiStarSFill className="w-6 h-6 mx-auto text-yellow-300" />
                <RiStarSFill className="w-6 h-6 mx-auto text-yellow-300" />
                <RiStarSFill className="w-6 h-6 mx-auto text-yellow-300" />
                <RiStarSFill className="w-6 h-6 mx-auto text-yellow-300" />
              </div>
            </div>
            <p className="lg:text-sm text-xs">
              I love my new car from Motrix! Fast service and a great deal. I’ll
              definitely be back for my next purchase!
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="max-w-[80%] md:max-w-[55%] lg:max-w-[40%] md:mt-16 border border-black rounded-lg p-6 my-4 mx-auto">
            <div className="w-12 h-12 object-contain mx-auto my-6">
              <img
                className="w-6 h-6 object-contain rounded-full"
                src="https://media-yyz1-1.cdn.whatsapp.net/v/t61.24694-24/427292733_440001465123594_7427374697954390704_n.jpg?ccb=11-4&oh=01_Q5AaICHcVO_YjckQUA-QmHQ0dgzY2Im0A_DqUoPJJVsdYjl1&oe=67579F7D&_nc_sid=5e03e0&_nc_cat=106"
                alt="image-1"
              />
            </div>
            <div className="mb-6">
              <p>Vishal</p>
              <div className="flex w-fit mx-auto">
                <RiStarSFill className="w-6 h-6 mx-auto text-yellow-300" />
                <RiStarSFill className="w-6 h-6 mx-auto text-yellow-300" />
                <RiStarSFill className="w-6 h-6 mx-auto text-yellow-300" />
                <RiStarSFill className="w-6 h-6 mx-auto text-yellow-300" />
              </div>
            </div>
            <p className="lg:text-sm text-xs">
              Motrix made the car buying process so easy and stress-free.
              Excellent customer service and a wide selection of vehicles.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Ratings;
