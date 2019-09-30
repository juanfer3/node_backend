const express  = require('express');
const jwt = require('jsonwebtoken');
const config = require('./config');
const User = require('../backend/models/User');

const valitation = (req, res, next) => {
    const token = req.headers['a-access-token']
    if(!token){
        res.json({
            status: 401,
            users: 'No token found'
        })
    }

    const decode = jwt.verify(token, config.secret)
    console.log(decode);
    
    user = User.findById(decode.id, {password: 0})

    if(!user){
        res.json({
            status: 401,
            msg: 'This user dont not exist'
        })
    }else{
        next();
    }

}

module.exports = valitation;