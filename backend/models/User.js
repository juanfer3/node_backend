const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
    name:{ type: String, required: true },
    autor: { type: String, required: true },
});


const UserSchema = new Schema({
    name:{ type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    books: [BookSchema]
});

module.exports = mongoose.model('Users', UserSchema);