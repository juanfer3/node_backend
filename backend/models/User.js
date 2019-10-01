const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const bcrypt = require('bcryptjs');

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

UserSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};


UserSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};


module.exports = model('Users', UserSchema);