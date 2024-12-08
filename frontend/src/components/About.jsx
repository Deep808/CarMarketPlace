import React, { useEffect } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const About = () => {
  // Scroll to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Array containing statistical data to be displayed
  const stats = [
    { id: 1, value: "800+", description: "Customer Testimonials" },
    { id: 2, value: "1,800+", description: "Vehicles Delivered" },
    { id: 3, value: "30,000+", description: "Satisfied Credit Applicants" },
    { id: 4, value: "98%", description: "Customer Satisfaction Rate" },
  ];

  return (
    <>
      <div className="font max-w-[90%] mx-auto my-6 md:max-w-[70%] lg:max-w-[60%]">
        {/* Section Header */}
        <div className="flex items-center">
          <h1 className="text-[2em] lg:text-[3em] font-bold text-left">
            About us
          </h1>
          <span className="hidden md:hidden lg:block w-[70%] ml-4 bg-black/20 h-[1px]"></span>
        </div>

        {/* Company description */}
        <div>
          <h2 className="font-bold text-[2em] my-8">
            Driven to Deliver Excellence✨
          </h2>
          <p>
            At Motrix, we’re more than just a car dealership – we’re your
            trusted partner on the road to finding the perfect vehicle. With a
            commitment to quality, integrity, and exceptional customer service,
            we offer a diverse selection of cars to suit every lifestyle and
            budget. Our team of automotive experts is here to guide you every
            step of the way, ensuring a seamless and enjoyable car-buying
            experience. Discover the Motrix difference, where your journey
            begins with trust and drives forward with satisfaction.
          </p>
        </div>

        {/* Image Layout Section */}
        <div className="grid grid-cols-2 grid-rows-2 gap-x-1 gap-y-1 my-12">
          {/* Main Image */}
          <div className="row-span-2">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="https://images.unsplash.com/photo-1717347424087-842a99131d8e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Main showroom"
            />
          </div>
          {/* Secondary Images */}
          <div>
            <img
              className="h-full w-full object-cover rounded-lg"
              src="https://plus.unsplash.com/premium_photo-1661274103468-71e91f7ea517?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Car interior"
            />
          </div>
          <div>
            <img
              className="h-full w-full object-cover rounded-lg"
              src="https://images.unsplash.com/photo-1546750921-ce6cc9add92f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Car exterior"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="max-w-[80%] mx-auto text-center mb-6">
              <h1 className="text-[2em] font-bold">{stat.value}</h1>
              <p className="text-lg opacity-80 lg:text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="my-12">
          <h1 className="font-semibold text-center text-[1.5em]">
            At Motrix, we’re dedicated to delivering quality vehicles,
            transparent service, and a car-buying experience you can trust.
          </h1>
        </div>

        {/* Link to browse cars */}
        <Link to="/cars">
          <div className="my-12 z-[10] max-w-[70%] md:max-w-[40%] lg:max-w-[30%] mx-auto text-center border border-[#3b1c32] p-4 hover:bg-[#3b1c32] hover:text-white transition-all duration-200 ease-in-out cursor-pointer">
            <p>Browse All Cars</p>
          </div>
        </Link>
      </div>

      {/* Footer Component */}
      <Footer />
    </>
  );
};

export default About;
