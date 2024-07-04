const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const tasksController = require('../controller/taskController');
const taskModel = require('../model/taskModel');
const auth = require('../middleware/auth');

router.post('/registeruser', userController.registeruser);
router.post('/loginuser', userController.loginusers);
router.get('/getuser', userController.getusers);

router.post('/addtask', tasksController.createtask);

router.get('/gettasks', auth, async (req, res) => {
    try {
        const tasks = await taskModel.find();
        res.status(200).send(tasks);
    }
    catch (err) {
        res.status(500).send(err);
    }
});

router.get('/gettaskbyuserid',tasksController.gettaskbyuserid);
router.put('/updatetask/:id', tasksController.updateTask);
router.delete('/deletetask/:id', tasksController.deleteTask);
module.exports = router;