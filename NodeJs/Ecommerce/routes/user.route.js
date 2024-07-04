const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../model/user.module');

router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        const token = jwt.sign({_id:user._id},"anish",{expiresIn:'1h'});
        res.status(201).send({user, token});
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        })
    }   
});

router.post('/login', async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user || !(await user.comparePassword(password))){
            return res.status(400).send({
                message: 'Invalid email or password'
            });
        }
        const token = jwt.sign({_id:user._id},"anish",{expiresIn:'1h'});
        res.status(200).send({user, token});
    }
    catch (err) {
        res.status(500).send({
            message: err.message
        })
    }

});

router.get('/getusers', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    }
})

module.exports = router;