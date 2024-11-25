import React from "react";
import Banner from "./Banner";
import Benefits from "./Benefits";
import Trust from "./Trust";
import Browse from "./Browse";
import Ratings from "./Ratings";
import Map from "./Map";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      {/* VIDEO BANNER  */}
      <Banner />

      {/* ALL BENEFITS  */}
      <Benefits />

      {/* COMPANIES  */}
      <Trust />

      {/* BROWSE CARS  */}
      <Browse />

      {/* CUSTOMER RATINGS  */}
      <Ratings />

      {/* MAP/LOCATION  */}
      <Map />

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Main;
