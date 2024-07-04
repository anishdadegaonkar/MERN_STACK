const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    createdby:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateTime:{
        type:Date,
        default: Date.now
    },
    invites:[
        {
                userid:{type: mongoose.Schema.Types.ObjectId,
                ref: 'User'}
        }
    ],
    rsvp:[
        {
        userid:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            status:{
                type: String,
                enum : ['Attending','Maybe','No']
            }
    }
    ]
});

module.exports = mongoose.model('Event', eventSchema);