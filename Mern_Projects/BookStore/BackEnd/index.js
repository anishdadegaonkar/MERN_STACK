import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoutes from "./route/book.route.js";
import cors from "cors";

const app = express();
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 4000;
const URL = process.env.MongoDBURL;
//connect to mongodb
try {
  mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (err) {
  console.log("Error connecting to MongoDB" + err.message);
}

//defining routes
app.use("/book",bookRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
