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

async function loginDoctor(req, res) {
    console.log(req.body);
    try{

        const newDoctor = await doctorModules.findOne({demail: req.body.demail, dpassword: req.body.dpassword});
        if(!newDoctor){
            return res.status(201).send({"message":"Doctor not found",success:false});
        }
    const isMatch = await doctorModules.findOne({dpassword: req.body.dpassword});
    if(!isMatch){
        return res.status(201).send({"message":"Password is incorrect",success:false});
    }
    else{
        result ={"message":"Login Success",success:true,id:newDoctor._id,name:newDoctor.dname}
        console.log(result);
        return res.status(200).send(result);
        
    }
    }
    catch(err){
        return res.status(500).send(err);
    }
}

module.exports ={
    addDoctor,
    getDoctor,
    loginDoctor
}