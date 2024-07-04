const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');
const ticketController = require('../controllers/ticket-controller');
const attatchmentController = require('../controllers/attachment-controller');
const remarkController = require('../controllers/remark-controller');
const ticketattachmentController = require('../controllers/ticketattachment-controller');
const ticketremarkController = require('../controllers/ticketremark-controller');

router.post('/adduser',userController.adduser);
router.get('/getuser',userController.getuser);
router.put('/updateuser/:id',userController.updateuser);
router.delete('/deleteuser/:id',userController.deleteuser);

router.post('/addticket',ticketController.addticket);
router.get('/getticket',ticketController.getticket);
router.put('/updateticket',ticketController.updateticket);
router.delete('/deletticket',ticketController.deleteticket);

router.post('/addattachment',attatchmentController.addattachment);
router.get('/getattachment',attatchmentController.getattachment);
router.put('/updateattachment',attatchmentController.updateattachment);
router.delete('/deletattachment',attatchmentController.deleteattachment);

router.post('/addremark',remarkController.addremark);
router.get('/getremark',remarkController.getremark);
router.put('/updateremark',remarkController.updateremark);
router.delete('/deletremark',remarkController.deleteremark);

router.post('/addticketattachment',ticketattachmentController.addticketattachment);
router.get('/getticketattachment',ticketattachmentController.getticketattachment);
router.put('/updateticketattachment',ticketattachmentController.updateticketattachment);
router.delete('/deleteticketattachment',ticketattachmentController.deleteticketattachment);

router.post('/addticketremark',ticketremarkController.addticketremark);
router.get('/getticketremark',ticketremarkController.getticketremark);
router.put('/updateticketremark',ticketremarkController.updateticketremark);
router.delete('/deleteticketremark',ticketremarkController.deleteticketremark);

module.exports = router;

