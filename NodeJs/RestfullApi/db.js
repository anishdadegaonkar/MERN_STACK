const mongoose = require('mongoose');

const connectDB = async ()=> {
    try {
        await mongoose.connect("mongodb+srv://dadegaonkaranish:Anish2002@cluster0.94zh8ps.mongodb.net/users");
        console.log('MongoDB Connected...');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;