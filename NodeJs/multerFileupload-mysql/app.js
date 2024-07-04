const express = require("express");
const db = require('./db');
const multer = require("multer");
const app = express();
port = 7000;

// file upload
const storage = multer.diskStorage({
    destination:'./upload',
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({storage});

app.post('/upload',upload.single('file'),(req,res)=>{
    const {filename,path,originalname,mimetype,size} = req.file;
    console.log(req.file);
    const query = "INSERT INTO file_upload(filename,path,originalname,mimetype,size) VALUES (?,?,?,?,?)"
    db.query(query,[filename,path,originalname,mimetype,size],(err,result)=>{
        if(err){
            return res.status(500).send(err);
        }
        res.status(201).send(`file upload: ${filename}`);
    })
})

app.post('/uploadmultiple', upload.array('files', 10), (req, res) => { // 'files' is the field name for multiple files, and 10 is the max count
    if (!req.files || req.files.length === 0) {
      return res.status(400).send('No files uploaded.');
    }
  
    const files = req.files;
    let query = 'INSERT INTO file_upload (filename, path, originalname, mimetype, size) VALUES ';
    const queryValues = [];
  
    files.forEach((file, index) => {
      const { filename, path, originalname, mimetype, size } = file;
      query += '(?, ?, ?, ?, ?)';
      if (index < files.length - 1) {
        query += ', ';
      }
      queryValues.push(filename, path, originalname, mimetype, size);
    });
  
    db.query(query, queryValues, (err, result) => {
      if (err) {
        console.error('Database query error:', err);
        return res.status(500).send('Failed to upload file information.');
      }
      res.status(201).send(`Files uploaded successfully.`);
    });
  });


app.get('/download/:filename',(req,res)=>{
    const sql = 'SELECT * FROM file_upload WHERE filename = ?'
    db.query(sql,[req.params.filename],(err,result)=>{
        if(err){
            return res.status(500).send(err);
        }
        if(result.length === 0){
            return res.status(404).send('File not found')
        }
        const file = result[0];
        res.download(file.path,file.originalname);
    })
})


app.listen(port,()=>{
    console.log(`server started at ${port}`);
})