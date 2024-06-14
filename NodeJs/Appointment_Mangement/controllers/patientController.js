const mongoose = require('mongoose');
const patientModule = require('../module/patientModel');

addPatient = async (req,res) => {
    console.log(req.body);
    try{
        const newpatient = new patientModule(req.body);
        await newpatient.save()
        res.status(201).send(newpatient);
    }
    catch(err){
        res.status(500).send(err);
    }
}

getPatient = async (req,res) => {
    try{
        const newPatient = await patientModule.find();
        return res.send(newPatient);
        return res.status(200).send(newPatient);
    }
    catch(err){
        return res.status(500).send(err);
    }
}

async function loginPatient(req, res) {
    console.log(req.body);
    try{

        const newPatient = await patientModule.findOne({pemail: req.body.pemail, ppassword: req.body.ppassword});
        if(!newPatient){
            res.status(201).send({"message":"Patient not found",success:false});
        }
    const isMatch = await patientModule.findOne({ppassword: req.body.ppassword});
    if(!isMatch){
        res.status(201).send({"message":"Password is incorrect",success:false});
    }
    else{
        result ={"message":"Patient Login Success",success:true,id:newPatient._id,name:newPatient.pname}
        console.log(result);
        res.status(200).send(result);
    }
    }
    catch(err){
        res.status(500).send(err);
    }
}

module.exports = {
    addPatient,
    getPatient,
    loginPatient
}