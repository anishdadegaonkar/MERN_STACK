const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const ticketController = require('../controller/ticketController');

router.post('/adduser',userController.adduser);
router.get('/getuser',userController.getuser);
router.patch('/updateuser/:id',userController.updateuser);
router.delete('/deleteuser/:id',userController.deleteuser);

router.post('/addticket',ticketController.addticket);
router.get('/getticket',ticketController.getticket);
router.patch('/updateticket/:id',ticketController.updateticket);
router.delete('/deleteticket/:id',ticketController.deleteticket);
module.exports = router;