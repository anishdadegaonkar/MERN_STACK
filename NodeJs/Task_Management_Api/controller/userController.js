const userModel = require('../model/userModel');
const express = require('express');
const jwt = require('jsonwebtoken');
async function registeruser(req, res) {
    try{
        const user = new userModel(req.body);
        await user.save();
        res.status(201).send({user});
    }
    catch(err){
        res.status(400).send({message:err.message});
    }
}

async function loginusers(req, res){
    try{
        const {email,password} = req.body;
        const user = await userModel.findOne({email});
        if(!user || !(await user.comparePassword(password))){
           return res.status(400).send({message:"user not found"});
        }
        const token = jwt.sign({_id:user._id},"anish",{expiresIn:'1h'});
        res.status(200).send({user,token})
    }
    catch(err){
        res.status(400).send({message:err.message});
        console.error(err);
    }
}

async function getusers(req, res){
    try{
        const users = await userModel.find();
        res.status(200).send(users);
    }
    catch(err){
        res.status(400).send({message:err.message});
    }
}

module.exports = {
    registeruser,
    loginusers,
    getusers

}