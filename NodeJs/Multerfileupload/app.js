const express = require('express');
const multer = require('multer');
port = 3002;
const path = require('path');
const db = require('./db');
const File = require('./fileModel');
const app = express();

// Set up store engine
const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file,cb) =>{
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({storage});

// upload routes
app.post('/uploads', upload.single('file'), async (req, res)=>{
    const {filename,path,orignalname,mimetype,size} = req.file;
    const newFile = new File({filename,path,orignalname,mimetype,size});
    try{
        await newFile.save();
        res.status(201).send(`File Uploaded successfully : ${newFile.filename}`);
    }
    catch(err){
        res.status(500).send(err);
    }
});

// serve the uploaded file
app.get('/download/:filename', async (req, res)=>{
    console.log(req.params);
    try{
    const file = await File.findOne({filename: req.params.filename});
        if(!file){
            return res.status(404).send('File not found');
        }
        res.download(file.path, file.orignalname);
    }
    catch(err){
        res.status(500).send(err);
    }
});
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});