const express = require('express');
const router = express.Router();
const patientModel = require('../controllers/patientController');
const doctorModel = require('../controllers/doctorController');

router.post('/addpatient',patientModel.addPatient);
router.get('/getpatients',patientModel.getPatient);
router.post('/loginp',patientModel.loginPatient);

router.post('/adddoctor',doctorModel.addDoctor);
router.get('/getdoctor',doctorModel.getDoctor);
router.post('/logind',doctorModel.loginDoctor);


module.exports = router;