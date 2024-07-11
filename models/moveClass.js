const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moveClassSchema = new Schema({
    id: { type: String, required: true },
    instructorName: { type: String, required: true },
    type: { type: String, required: true },
    youtubeUrl: { type: String, required: true },
    difficulty: { type: Number, required: true },
   
})

module.exports = mongoose.model('MoveClass', moveClassSchema);
