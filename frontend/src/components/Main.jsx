import React, { useEffect } from "react";
import Banner from "./Banner";
import Benefits from "./Benefits";
import Trust from "./Trust";
import Browse from "./Browse";
import Ratings from "./Ratings";
import Map from "./Map";
import Footer from "./Footer";
import "../App.css";

const Main = () => {
  // Scrolls to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font">
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
