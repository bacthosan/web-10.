const RegisterSchema = require('../model/registerModel');

const addRegister = (register, callback) => {
    let newRegister = {
        register
    };
    RegisterSchema.create(newRegister, (err, res) => {
        if (err) {
            callback(err);
        } else {
            callback(null, res._id);
        }
    });
}


module.exports = {
    addRegister
}