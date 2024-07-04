const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const api = require('./route/api');
const app = express();
port = 5001;
app.use(bodyparser.json());
app.use(express.json());
app.use('/api',api);
// Connect to MongoDB compass
mongoose.connect('mongodb://localhost:27017/eventmgmt');
mongoose.connection.once("open",()=>{
    console.log("MongoDB connected");
});


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});

