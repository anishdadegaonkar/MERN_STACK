const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');

const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'demo1'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// app.get('/showcategories', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'categories.html'));
// });

app.get('/showcategories', (req, res) => {
    const query = 'SELECT * FROM categories';
    connection.query(query, (err, result) => {
        if (err) throw err;
        res.send(result);
        console.log(result);
    });
});




app.post('/', (req, res) => {
    const { namee } = req.body;
    console.log(namee);
    const query = 'INSERT INTO categories (namee) VALUES (?)';
    connection.query(query, [namee], (err, result) => {
        if (err) throw err;
        res.redirect('/');
        
    });
});
