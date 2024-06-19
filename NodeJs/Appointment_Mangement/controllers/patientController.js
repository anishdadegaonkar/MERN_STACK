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


// brypted patient information is available
async function loginPatient(req, res) {
    try{
        const {pemail,ppassword} = req.body;
        const user = await patientModule.findOne({pemail});
        if(!user || !(await user.comparePassword(ppassword))){
            return res.status(400).send({error: 'Invalid email or password'});
        }
        res.status(200).send({user,"message":"Patient login successful"});
    }
    catch(err){
        res.status(500).send({error: err.message});
    }
}
module.exports = {
    addPatient,
    getPatient,
    loginPatient
}