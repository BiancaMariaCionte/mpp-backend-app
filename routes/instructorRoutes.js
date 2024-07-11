const express = require('express'); 
const router = express.Router(); 
const controller = require('../controllers/instructorController.js');

router.get('/', controller.getAllInstructors); 

router.post('/', controller.createNewInstructor); 

router.get('/:instructorId', controller.showDetailsOfInstructort); 

router.delete('/:instructorId', controller.deleteInstructor); 

router.put('/:instructorId',controller.updateInstructor); 
module.exports = router; 