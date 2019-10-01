const mongoose = require('mongoose');
const { Schema } = mongoose;

const PhotoSchema = new Schema({
    title: String,
    description: String,
    imagePath: String
});

module.exports = mongoose.model('Photo', PhotoSchema);