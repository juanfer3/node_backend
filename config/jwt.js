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
    try {
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
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }

}

module.exports = valitation;