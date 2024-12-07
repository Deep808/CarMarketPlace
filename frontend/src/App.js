import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component Imports
import Nav from "./components/Nav";
import Main from "./components/Main";
import CarTypes from "./components/Cars";
import CarDetails from "./components/CarDetails";
import About from "./components/About";
import AddCar from "./components/AddCar";
import EditCar from "./components/EditCar";
import Contact from "./components/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <Router>
      {/* Navigation Component */}
      <Nav />
      {/* Scroll to top button  */}
      <ScrollToTopButton />
      {/* Define Routes */}
      <Routes>
        {/* Main/Home Page */}
        <Route path="/" element={<Main />} />
        {/* List of Cars */}
        <Route path="/cars" element={<CarTypes />} />
        {/* Details of a Specific Car */}
        <Route path="/car/:id" element={<CarDetails />} />
        {/* About Page */}
        <Route path="/about" element={<About />} />
        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
        {/* Add a New Car */}
        <Route path="/add" element={<AddCar />} />
        {/* Edit an Existing Car */}
        <Route path="/edit/:id" element={<EditCar />} />
      </Routes>
    </Router>
  );
}

export default App;
