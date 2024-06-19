const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const doctor = mongoose.Schema({
    dname:{type: 'string', required: true},
    dphone:{type: 'number', required: true},
    dspecilaist:{type: 'string', required: true},
    demail:{type: 'string', required:true},
    dpassword:{type: 'string', required: true},
    daddress:{type: 'string', required: true}
})

doctor.pre('save', async function(next){
    const user = this;
    if(user.isModified('dpassword')){
        user.dpassword = await bcrypt.hash(user.dpassword, 10);
    }
    next();
});

doctor.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.dpassword);
}

module.exports = mongoose.model('Doctor',doctor);