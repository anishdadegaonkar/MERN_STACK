express = require('express');
app = express();
PORT = 5000;
path = require('path');
const BodyParser = require('body-parser');
var urlencodedParser = BodyParser.urlencoded({extended : false});

app.get('/',(req,res)=>{
    // res.end("Hellow....");
    res.sendFile(path.join(__dirname,'index.html'))
})


app.use(express.json());
app.use(urlencodedParser);

app.get('/registrationPage',(req,res)=>{

    reponse = {
        first_name : req.query.fname,
        last_name : req.query.lname
    }
    console.log(reponse);
    res.end(JSON.stringify(reponse))
})

app.post('/registrationPage' , function(req,res){

    reponse = {
        first_name : req.body.fname,
        last_name : req.body.lname,
        Email : req.body.uemail,
        Contact : req.body.ucontact,
        Dob : req.body.ubirth
    };
    console.log(reponse);
    res.end(JSON.stringify(reponse))
})

app.listen(PORT,()=>{
    console.log(`Server Started At Port No : localhost:${PORT}`);
})