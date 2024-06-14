const express = require('express');
const app = express();
const mongoose = require('mongoose');
const apiroute = require('./route/api');
port = 4000;

connectDb = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://dadegaonkaranish:Anish2002@cluster0.qpwskjv.mongodb.net/appointment');
        console.log('connected to db');
    }catch(err){
        console.log(err);
    }
}
connectDb();
app.use(express.json());
app.use('/api',apiroute);

app.listen(port , () =>{
    console.log(`server is running on port ${port}`);
});