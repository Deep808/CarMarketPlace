// include packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const carRoutes = require('./routes/carRoutes');

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://dmprajapati8585:Deep@cluster0.osjzk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/cars', carRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
