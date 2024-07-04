const taskModel = require('../model/taskModel');

async function createtask(req,res,){
    try{
        const task = await taskModel(req.body);
        await task.save();
        res.status(201).send(task);
    }
    catch(err){
        res.status(500).send(err);
    }
}
async function gettaskbyuserid(req,res){
    try{
        uid = req.params.userid;
        const task = await taskModel.find({uid},{__v:0});
        res.status(200).send(task);
    }
    catch(err){
        res.status(500).send(err);
    }
}

async function updateTask(req, res){
    try{
        const task = await taskModel.findByIdAndUpdate(req.params.id);
        res.status(200).send(task);
    }
    catch(err){
        res.status(500).send(err);
    }
}

async function deleteTask(req, res){
    try{
        const task = await taskModel.findByIdAndDelete(req.params.id);
        res.status(200).send(task);
    }
    catch(err){
        res.status(500).send(err);
    }
}

module.exports = {
    createtask,
    gettaskbyuserid,
    updateTask,
    deleteTask
}