const mongoose = require('mongoose');

const patient = mongoose.Schema({
    pname : {type: String, required: false},
    pnumber : {type:Number, required: false},
    pgender : {type: String, required: false},
    pdob : {type: String, required:false},
    pbloodgroup : {type: String, required: false},
    pemail : {type: String, required: false},
    ppassword : {type: String, required: false},
    paddress : {type: String, required: false}
});

module.exports = mongoose.model('Patient', patient);