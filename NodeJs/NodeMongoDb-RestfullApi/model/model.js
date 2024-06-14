const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    student_name:{
        type:String,
        required:false
    },
    student_age:{
        type:Number,
        required:false
    }
});

module.exports = mongoose.model('Studentdata', studentSchema);