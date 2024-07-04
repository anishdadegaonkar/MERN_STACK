const mongoose = require('mongoose');

const mongourl = 'mongodb+srv://dadegaonkaranish:Anish2002@cluster0.94zh8ps.mongodb.net/fileupload';

mongoose.connect(mongourl);

const db = mongoose.connection;

db.on("error", (err) => {
    console.log(err);
});

db.once("open", () => {
    console.log("MongoDB Connected");
});

module.exports = db;