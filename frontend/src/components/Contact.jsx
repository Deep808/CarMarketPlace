import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const Contact = () => {
  // Ensures the page scrolls to the top when the component is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="font max-w-[90%] mx-auto my-6 md:max-w-[70%] lg:max-w-[60%]">
        {/* Location Section */}
        <div>
          <h1 className="text-[2em] lg:text-[3em] font-bold text-left">
            Our Location
          </h1>
          <iframe
            title="map"
            className="max-w-[100%] md:w-full rounded-lg my-6 mx-auto"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.9555730843945!2d-79.33804092346436!3d43.773781044623114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d3bca1a3f78f%3A0x815365ed6c3b957e!2sLambton%20College%20In%20Toronto!5e0!3m2!1sen!2sca!4v1732481123832!5m2!1sen!2sca"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Section */}
        <div className="my-12">
          <h1 className="text-[2em] lg:text-[3em] font-bold text-left">
            Get in Touch
          </h1>
          <p>Got questions? Reach out to us, and we’ll respond promptly!</p>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Contact;
