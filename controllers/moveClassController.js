
const moveClassModel = require('../models/moveClass.js')

const getAllMoveClasses = async (req,res,next)=> {
    try {
        const result = await moveClassModel.find();
        res.send(result);
    } catch (err) {
        res.status(500).json({
            error: err 
        });
    }
}

const createNewMoveClass = (req,res,next)=>{
    console.log(req.body);
    const moveClassList = new moveClassModel({
        id: new mongoose.Types.ObjectId(),
        instructorName: req.body.instructorName,
        type: req.body.type,
        youtubeUrl: req.body.Rating,
        difficulty: req.body.difficulty
        
    });
    moveClassList.save().then(result=>{
        res.status(201).json({ 
            message: 'MoveClass created',
            createdMoveClass: result
        });
    }).catch(err=>console.log(err));
}

const deleteMoveClass = async (req,res,next)=>{
    const {moveClassId} = req.params;
    const result = await moveClassModel.deleteOne({id: moveClassId});
    res.status(200).json({
        message: 'Deleted instructor',
        moveClassId: req.body.productId
    });

}

const showDetailsOfMoveClass = async(req,res,next)=>{
    try{
        const {moveClassId} = req.params;
        const result = await moveClassModel.findOne({id: moveClassId});
        res.send(result);
    } catch (err) {
        res.status(500).json({
            error: err 
        });
    }
}

const updateMoveClass = async(req,res,next)=>{
    
    try{
        const {moveClassId} = req.params;
        const result = await moveClassModel.updateOne({id: moveClassId}, req.body);
        res.status(200).json({
            message: 'Updated moveClass',
            moveClass: req.body
        });
    } catch (err) {
        res.status(500).json({
            error: err 
        });
    }
};


module.exports = {
    getAllMoveClasses,
    createNewMoveClass,
    deleteMoveClass,
    showDetailsOfMoveClass,
    updateMoveClass
}