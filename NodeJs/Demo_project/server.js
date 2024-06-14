const express = require('express');
const app = express();
port = 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
app.use(express.static('public'));

// app.get('/', (req, res)=>{
//     res.send('Hello World');
// });