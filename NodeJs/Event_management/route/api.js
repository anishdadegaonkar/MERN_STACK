const userController = require('../controller/userController');
const eventController = require('../controller/eventController');
const express = require('express');
const auth = require('../middleware/auth')
const router = express.Router();

router.post('/registeruser',userController.registeruser);
router.post('/loginuser',userController.loginuser);

router.post('/createevent',eventController.createEvent);
router.get('/getallevents',auth,eventController.getAllEvents);
router.get('/geteventbyid',eventController.getSingleEvent);
router.put('/updateevent/:id',eventController.updateEvent);
router.delete('/deleteevent/:id',eventController.deleteEvent);

router.post('/inviteevent/:id/invite',auth,eventController.invite);
router.post('/inviteevent/:id/rsvp',auth,eventController.rsvp)

module.exports = router;