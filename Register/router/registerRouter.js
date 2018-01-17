const express = require('express');
const Router = express.Router();
const registerController = require('../controller/registerController');


Router.post('/', (req, res)=>{
    registerController.addRegister(req.body, (err, id)=>{
        if (err) {
            console.log(err);
        } else {
            res.send("Welcome, "+req.body.user);
        }
    });
});

module.exports = Router;