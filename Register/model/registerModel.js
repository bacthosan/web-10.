const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
    userName : { type: String, required:  true },
    email : { type: String, required: true },
    licence : { type: Boolean, required: true }
});

module.exports = mongoose.model("register", RegisterSchema);