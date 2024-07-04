const mongoose = require('mongoose');

const user = mongoose.Schema({
    uname:{type: String, required: true},
    uemail:{type: String, required: true},
    umobile:{type: Number, required: true},
    ugender:{type: String, required: true},
    uage:{type: Number, required:true},
    udesignation:{type:String, required: true},
    utype:{type: String, required: true},
    upassword:{type: String, required: true},
    uisdeleted:{type: String, required: true},
    ucreatedby:{type: String, required: true},
    umodifiedby:{type: String, required: true},
    ucreatedat:{type: Date, required: true},
    umodifiedat:{type: Date, required: true}
})

module.exports = mongoose.model('User', user);

// {
//  "uname":"demo",
//  "uemail":"demo@gmail",
//  "umobile":123,
//  "ugender":"male",
//  "uage":22,
//  "udesignation":"a",
//  "utype":"a",
//  "upassword":"a",
//  "uisdeleted":"a",
//  "ucreatedby":"a",
//  "umodifiedby":"a",
//  "ucreatedat":"2020-06-20T06:13Z",
//  "umodifiedat":"2020-06-20T06:13Z"
// }