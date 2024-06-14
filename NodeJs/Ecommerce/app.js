const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require('./routes/product.route');
const Userroute = require('./routes/user.route');
const app = express();
port = 4000;

mongoose.connect(
  "mongodb+srv://dadegaonkaranish:Anish2002@cluster0.94zh8ps.mongodb.net/users"
);

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected");
});

app.use(express.json());
app.use('/api', productRoutes)
app.use('/api/users',Userroute)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
