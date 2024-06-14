const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db');
const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('API running');
});

app.use('/api/employee', require('./routes/employee'));
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> {
    console.log(`Server is running on port ${PORT}`);
});
