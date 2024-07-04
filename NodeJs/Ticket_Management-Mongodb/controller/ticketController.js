const ticketModel = require('../model/ticketModel');

async function addticket(req, res) {
    try{
        const ticket = new ticketModel(req.body);
        await ticket.save();
        res.status(201).send(ticket);
    }
    catch(err){
        res.status(500).send(err);
    }
}

async function getticket(req, res) {
    try{
        const ticket = await ticketModel.find();
        res.status(200).send(ticket);
    }
    catch(err){
        res.status(500).send(err);
    }
}

async function updateticket(req, res) {
    try{
        const ticket = await ticketModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send(ticket);
    }
    catch(err){
        res.status(500).send(err);
    }
}

async function deleteticket(req, res) {
    try{
        const ticket = await ticketModel.findByIdAndDelete(req.params.id);
        res.status(200).send(ticket);
    }
    catch(err){
        res.status(500).send(err);
    }
}

module.exports = {
    addticket,
    getticket,
    updateticket,
    deleteticket,
}