// models/carModel.js
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
    kilometers: { type: Number, required: true },
    vin: { type: String, required: true, unique: true }, 
    price: { type: Number, required: true },
    images: { 
        type: [String], 
        validate: [arrayLimit, '{PATH} exceeds the limit of 4'],
        required: true 
    },
    description: { type: String, required: true },
});

// Custom validator to limit the array size
function arrayLimit(val) {
    return val.length <= 4;
}

module.exports = mongoose.model('Car', carSchema);