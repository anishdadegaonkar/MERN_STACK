const express = require('express');
PORT = 9000;
const app = express();

// Send Data to server
// app.get('/',(req,res)=>{
//     res.end("HELLOW....");
// })

app.use(express.static('public'));

// Activate Server
app.listen(PORT,()=>{
    console.log(`Server Started:${PORT}`);
})