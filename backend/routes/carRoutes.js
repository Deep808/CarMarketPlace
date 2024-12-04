// routes/carRoutes.js
const express = require('express');
const {
    getCars,
    getCarById,
    addCar,
    updateCar,
    deleteCar,
} = require('../controllers/carController');

const router = express.Router();

// get all cars
router.get('/', getCars);   
//get single car detail with id       
router.get('/:id', getCarById); 
//add new carf   
router.post('/', addCar);  
//updat car details       
router.put('/:id', updateCar);  
//delete car  
router.delete('/:id', deleteCar);  

module.exports = router;
