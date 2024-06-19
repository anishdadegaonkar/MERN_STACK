const express = require('express');
const router = express.Router();
const patientModel = require('../controllers/patientController');
const doctorModel = require('../controllers/doctorController');
const appointmentModule = require('../controllers/appointmentController');

router.post('/addpatient',patientModel.addPatient);
router.get('/getpatients',patientModel.getPatient);
router.post('/loginp',patientModel.loginPatient);

router.post('/adddoctor',doctorModel.addDoctor);
router.get('/getdoctor',doctorModel.getDoctor);
router.post('/logind',doctorModel.loginDoctor);

router.post('/addappointment',appointmentModule.addappointment);
router.get('/getappointment',appointmentModule.getappointment);
router.get('/getappointmentbypatientid',appointmentModule.getappointmentbypatientid);
router.get('/getappointmentbydoctorid',appointmentModule.getappointmentbydoctorid);
router.put('/updateappointment/:id',appointmentModule.updateAppointmentbydoctor);
router.delete('/deletebypatientid/:id',appointmentModule.deleteAppointmentbypatient);
module.exports = router;