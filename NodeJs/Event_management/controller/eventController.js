const eventModel = require('../model/eventModel');

// Get all events
async function getAllEvents(req,res){
    try{
        const events = await eventModel.find();
        res.send(events);
    }
    catch(err){
        res.status(500).send(err);
    }
}

// Get single event by id
async function getSingleEvent(req,res){
    try{
        createdby = req.query.createdby;
        const event = await eventModel.find({createdby});
        if(!event){
            return res.status(404).send({message: "Event not found"});
        }
        res.status(200).send(event);
    }
    catch(err){
        res.status(500).send(err);
    }
}

// Create new event

async function createEvent(req,res){
    try{
        const newEvent = new eventModel(req.body);
        await newEvent.save();
        res.status(200).send({Message:"Event Created Sucessfully",newEvent});
    }
    catch(err){
        res.status(400).send(err);
    }
}

// Update event by id

async function updateEvent(req,res){
    try{
        const updatedEvent = await eventModel.findByIdAndUpdate(req.params.id , req.body ,{new:true});
        if(!updatedEvent){
            return res.status(404).send({message: "Event not found"});
        }
        res.status(200).send({Message:"Event Updated successfully",updatedEvent});
    }
    catch(err){
        res.status(400).send(err);
    }
}

// Delete event by id

async function deleteEvent(req,res){
    try{
        const deletedEvent = await eventModel.findByIdAndDelete(req.params.id);
        if(!deletedEvent){
            return res.status(404).send({message: "Event not found"});
        }
        res.send({message: "Event deleted successfully", deletedEvent});
    }
    catch(err){
        res.status(500).send(err);
    }
}

async function invite(req,res){
    try{
        const updatedEvent = await eventModel.findByIdAndUpdate(req.params.id,{$push:{invites:req.body}});
        if(!updatedEvent){
            return res.status(404).send({message: "Event not found"});
        }
        res.status(200).send({Message:"User invited successfully", updatedEvent});
    }
    catch(err){
        res.status(400).send(err);
    }
}

async function rsvp(req, res){
    try{
        const updatedEvent = await eventModel.findByIdAndUpdate(req.params.id,{$push:{rsvp:req.body}});
        if(!updatedEvent){
            return res.status(404).send({message: "Event not found"});
        }
        res.status(200).send({Message:"User RSVPed successfully", updatedEvent});
    }
    catch(err){
        res.status(400).send(err);
    }
}
module.exports = {
    getAllEvents,
    getSingleEvent,
    createEvent,
    updateEvent,
    deleteEvent,
    invite,
    rsvp
}