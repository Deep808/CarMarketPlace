import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full md:h-[60vh] object-cover lg:h-screen overflow-hidden">
      {/* Video background */}
      <video
        muted
        autoPlay
        loop
        src="https://videos.pexels.com/video-files/5962561/5962561-uhd_2560_1440_30fps.mp4"
      ></video>

      {/* Credits text for the video */}
      <span className="absolute bottom-2 left-2 text-[.6em] lg:text-[1em] text-white/50">
        Credits: Tom Fisk (Pexels)
      </span>
    </div>
  );
};

export default Banner;
