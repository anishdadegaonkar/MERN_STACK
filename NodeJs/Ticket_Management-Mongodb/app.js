const express = require('express');
const app = express();
const mongoose = require('mongoose');
const api = require('./route/api');
port = 5000;

connectDb = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://dadegaonkaranish:Anish2002@cluster0.qpwskjv.mongodb.net/ticketManagement');
        console.log('connected to db');
    }catch(err){
        console.log(err);
    }
}
connectDb();
app.use(express.json());
app.use('/api',api);

app.listen(port , () =>{
    console.log(`server is running on port ${port}`);
});