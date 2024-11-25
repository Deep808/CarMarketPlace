import React from "react";

const Banner = () => {
  const videoId = "xQtttvQp9Lc"; // Replace with your YouTube video ID

  return (
    <div className="relative w-full min-h-[45vh] md:h-[60vh] object-cover lg:h-screen overflow-hidden">
      <iframe
        className="absolute top-0 scale-150 left-0 w-full min-h-[45vh] md:h-[60vh] lg:h-screen object-cover"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&mute=1&playlist=${videoId}&controls=0`}
        title="YouTube Video Banner"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

      <span className="absolute bottom-2 left-2 text-[.6em] text-white/50">
        Credits: Michał Matiaszczyk
      </span>

      {/* <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold">
          Welcome to Our Dealership
        </h1>
        <p className="mt-4 text-lg md:text-xl">Find your dream car today!</p>
      </div> */}
    </div>
  );
};

export default Banner;
