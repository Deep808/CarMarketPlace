import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa"; // Importing an arrow icon from react-icons

const ScrollToTopButton = () => {
  // State to handle the visibility of the button
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  // Function to handle the visibility of the button based on the scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true); // Show the button after scrolling 300px
    } else {
      setIsVisible(false); // Hide the button if scrolled back to the top
    }
  };

  // Event listener for scroll event
  window.addEventListener("scroll", toggleVisibility);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed z-50 bottom-4 right-4 bg-[#6A1E55] text-white p-3 rounded-full shadow-lg hover:bg-[#3B1C32] transition-all duration-300 ease-in-out"
      >
        <FaArrowUp className="w-5 h-5" />
      </button>
    )
  );
};

export default ScrollToTopButton;
