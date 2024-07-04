const mongoose = require('mongoose');

const task = mongoose.Schema({
    userid:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['Pending','In-Progress','Completed'],
        default:'Pending'
    }
})

module.exports = mongoose.model('Task',task);