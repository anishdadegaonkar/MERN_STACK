const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ticketmanagement',
    insecureAuthent :true
});


module.exports = db.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('database connected');
    }
})

module.exports = db