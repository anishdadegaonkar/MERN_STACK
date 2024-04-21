const express = require('express');
const app = express();
const colours = require('colours');

PORT = 9001;

app.use(express.json());

data = []
app.get('/',(req,res)=>{
    res.write('Hellow..........');
    res.end();
})

app.listen(PORT,()=>{
    console.log(`Server Started http//localhost:${PORT}`);
})

console.log('HII'.red);
console.log('HII'.underline.green);
console.log('HIIIIIIIIIIIII'.rainbow);