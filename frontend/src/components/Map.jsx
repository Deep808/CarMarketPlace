import React from "react";

const Map = () => {
  return (
    <div>
      <h1 className="text-center mt-[3em] text-[2em] font-bold">
        Find us here!
      </h1>

      <div>
        <iframe
          className="max-w-[80%] rounded-lg my-6 mx-auto"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.9555730843945!2d-79.33804092346436!3d43.773781044623114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d3bca1a3f78f%3A0x815365ed6c3b957e!2sLambton%20College%20In%20Toronto!5e0!3m2!1sen!2sca!4v1732481123832!5m2!1sen!2sca"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
