const userModel = require('../model/userModel');
const jwt = require('jsonwebtoken');
// Register a new user
async function registeruser(req,res){
    try{
        const user = new userModel(req.body);
        await user.save();
        res.status(201).send({Message:"User Added Successfully",user});
    }
    catch(err){
        res.status(500).send(err);
    }
}

// login user
async function loginuser(req,res){
    try{
        const {email,password} = req.body;
        const user = await userModel.findOne({email})
        if(!user || !(await user.comparePassword(password))){
            return res.status(400).send({message:"user not found"});
        }
        const token = jwt.sign({_id:user._id},"anish",{expiresIn:'1h'});
        res.status(200).send({user,token});
    }
    catch(err){
        res.status(400).send(err)
    }
}


module.exports = {
    registeruser,
    loginuser
}
