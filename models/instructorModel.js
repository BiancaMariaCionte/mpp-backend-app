const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    experience: { type: Number, required: true },
    photoUrl: { type: String, required: true },
    classes: { type: Array, required: false }
});

module.exports = mongoose.model('instructorsList', instructorSchema);