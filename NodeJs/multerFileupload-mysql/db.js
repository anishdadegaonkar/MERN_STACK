const mysql = require("mysql2");
// mysql db connection
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'fileUploadusingMulter'
})

connection.connect((err)=>{
    if(err){
        console.error('Error connecting to mysql',err);
    }
    else{
        console.log('Connected to mysql');
    }
})

module.exports = connection;