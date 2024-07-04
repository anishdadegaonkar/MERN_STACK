const mongoose = require('mongoose');
const userModel = require('../model/userModel');

async function adduser(req, res) {
    try{
        const user = new userModel(req.body);
        await user.save();
        res.status(201).send(user);
    }
    catch(err){
        res.status(500).send(err);
    }
}

async function getuser(req, res) {
    try{
        const user = await userModel.find();
        return res.send(user);
        return res.status(200).send(user);
    }
    catch(err){
        res.status(500).send(err);
    }
}

async function updateuser(req, res) {
    try{
        const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.status(200).send(user);
    }
    catch(err){
        res.status(500).send(err);
    }
}

async function deleteuser(req, res) {
    try{
        const user = await userModel.findByIdAndDelete(req.params.id);
        return res.status(200).send(user);
    }
    catch(err){
        res.status(500).send(err);
    }
}

module.exports = {
    adduser,
    getuser,
    updateuser,
    deleteuser
}