
const mongoose = require('mongoose');
const instructors = require('../models/instructorModel.js');

const getAllInstructors = async (req,res,next)=> {
    try {
        const result = await instructors.find();
        res.send(result);
    } catch (err) {
        res.status(500).json({
            error: err 
        });
    }
}


const createNewInstructor = (req,res,next)=>{
    console.log(req.body);
    const instructorsList = new instructors({
        id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        experience: req.body.experience,
        photoUrl: req.body.Rating,
        classes: req.body.classes
    });
    instructorsList.save().then(result=>{
        res.status(201).json({ 
            message: 'Instructor created',
            createdInstructor: result
        });
    }).catch(err=>console.log(err));
}

const showDetailsOfInstructort = async(req,res,next)=>{
    try{
        const {insturctorId} = req.params;
        const result = await instructors.findOne({id: insturctorId});
        res.send(result);
    } catch (err) {
        res.status(500).json({
            error: err 
        });
    }
}

const deleteInstructor = async (req,res,next)=>{
    const {insturctorId} = req.params;
    const result = await instructors.deleteOne({id: insturctorId});
    res.status(200).json({
        message: 'Deleted instructor',
        insturctorId: req.body.productId
    });

}

const updateInstructor = async(req,res,next)=>{
    
    try{
        const {insturctorId} = req.params;
        const result = await instructors.updateOne({id: insturctorId}, req.body);
        res.status(200).json({
            message: 'Updated instructor',
            instructor: req.body
        });
    } catch (err) {
        res.status(500).json({
            error: err 
        });
    }
};

const getAllMoveClasses = async (req,res,next)=> {

    try{
        const {instructor} = req.params;
        const result = await playlists.findOne({id: insturctorId}).populate('MoveClasses');
        res.send(result);
    } catch (err) {
        res.status(500).json({
            error: err 
        });
    }
}

module.exports = {
    getAllInstructors,
    createNewInstructor,
    showDetailsOfInstructort,
    deleteInstructor,
    updateInstructor,
    getAllMoveClasses
}