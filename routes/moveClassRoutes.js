const express = require('express'); 
const router = express.Router(); 
const controller = require('../controllers/moveClassController.js');

router.get('/', controller.getAllMoveClasses); 

router.post('/', controller.createNewMoveClass); 

router.get('/:moveClassId', controller.showDetailsOfMoveClass); 

router.delete('/:moveClassId', controller.deleteMoveClass); 

router.put('/:moveClassId',controller.updateMoveClass); 

module.exports = router; 