const mongoose = require('mongoose');

const ticket = mongoose.Schema({
    tickettype:{type:String, required:true},
    ticketstatus:{type:String, required:true},
    tickettitle:{type:String, required:true},
    ticketdescription:{type:String, required:true},
    ticketduedate:{type:Date, required:true},
    ticketattachment:[
        {
            "filename":{
                type:String,
                required:false
            },
            "type":{
                type:String,
                required:false
            }
        }
    ],
    ticketallocatedid:{type:String, required:true},
    ticketremark:[
        {
            "userid":{
                type:String,
                required:false
            },
            "remark":{
                type:String,
                required:false
            },
            "date":{
                type:Date,
                required:false
            }
        }
    ]

})

module.exports = mongoose.model('Ticket', ticket);