const express = require('express');
const mongoose = require('mongoose');
const app = express();
port = 4002;
const api = require('./route/api');
app.use(express.json());

mongoose.connect("mongodb+srv://dadegaonkaranish:Anish2002@cluster0.94zh8ps.mongodb.net/taskmgmt");

mongoose.connection.once("open", () => {
    console.log("MongoDB Connected");
});

app.use('/api', api);
app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});