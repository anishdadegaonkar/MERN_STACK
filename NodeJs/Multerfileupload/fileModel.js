const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    filename:{
        type:String
    },
    path:{
        type:String
    },
    orignalname:{
        type:String
    },
    mimetype:{
        type:String
    },
    size:{
        type:Number
    },
    uploaddate:{
        type:Date,
        default:Date.now
    }
});

const File = mongoose.model('File',fileSchema);
module.exports = File;