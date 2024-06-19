const mongoose = require('mongoose');
const doctorModules = require('../module/doctorModule');
async function addDoctor(req,res){
    try{
        const newDoctor = new doctorModules(req.body);
        await newDoctor.save();
        res.status(201).send(newDoctor);
    }
    catch(err){
        res.status(500).send(err);
    }
}

async function getDoctor(req,res){
    try{
        const newDoctor = await doctorModules.find();
        return res.send(newDoctor);
        return res.status(200).send(newDoctor);
    }
    catch(err){
        return res.status(500).send(err);
    }
}

async function loginDoctor(req, res){
    try{
        const {demail,dpassword} = req.body;
        const user = await doctorModules.findOne({demail});
        if(!user || !(await user.comparePassword(dpassword))){
            return res.status(400).send({error: 'Invalid email or password'});
        }
        res.status(200).send({user,"message":"Doctor login successful"});
    }
    catch(err){
        res.status(500).send({error: err.message});
    }
}

module.exports ={
    addDoctor,
    getDoctor,
    loginDoctor
}