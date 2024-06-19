const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

patient.pre('save', async function(next){
    const user = this;
    if(user.isModified('ppassword')){
        user.ppassword = await bcrypt.hash(user.ppassword, 10);
    }
    next();
});

patient.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.ppassword);
}

module.exports = mongoose.model('Patient', patient);