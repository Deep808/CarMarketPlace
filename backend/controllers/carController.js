const Car = require("../models/carModel");

// give specific response of limited data in car listing as per designed
const formatCarData = (car) => {
  return {
    id: car._id,
    name: car.model,
    price: car.price,
    kilometers: car.kilometers,
    image: car.images[0],
  };
};

// Fetch all cars
const getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    const formattedCars = cars.map((car) => formatCarData(car));
    res.status(200).json(formattedCars);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single car by ID
const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: "Car not found" });
    res.status(200).json(car);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add a new car
const addCar = async (req, res) => {
  try {
    const car = new Car(req.body);
    const savedCar = await car.save();
    res.status(201).json(savedCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update car details

const updateCar = async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedCar) return res.status(404).json({ message: "Car not found" });
    res.status(200).json(updatedCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a car by ID
const deleteCar = async (req, res) => {
  try {
    const deletedCar = await Car.findByIdAndDelete(req.params.id);
    if (!deletedCar) return res.status(404).json({ message: "Car not found" });
    res.status(200).json({ message: "Car deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getCars,
  getCarById,
  addCar,
  updateCar,
  deleteCar,
};
