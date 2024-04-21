const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();
connectDb();
const app = express();
app.use(express.json());
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.use("/api/contacts",require("./routes/contactRoutes"));

app.listen(PORT, ()=>{
    console.log(`Server Started http://localhost:${PORT}`);
});