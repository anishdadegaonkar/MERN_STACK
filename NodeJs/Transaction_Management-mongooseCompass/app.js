const express = require('express');
const mongoose = require('mongoose');
port = 3005;
const app = express();
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/transactionmgmt')
    .then(() => console.log('Connected to MongoDB Compass'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Middleware for parsing JSON requests
app.use(express.json());

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});