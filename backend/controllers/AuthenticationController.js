const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');

const authenticationController = {}

authenticationController.register = async (req, res) => {
   
    const { username, password, name }= req.body

    const user = new User({
        username: username,
        name: name,
        password: password
    })

    user.password = await user.encryptPassword(user.password)

    await user.save();

    console.log(user);

    const token = jwt.sign( {id: user._id}, config.secret,{
        expiresIn: 60 * 60 * 24,
    });

    res.json({
        status: 200,
        msg: 'El usuario ha sido almacenado',
        auth: true,
        token,
        user
    })
}

authenticationController.login = async (req, res) => {
   
    res.json({
        status: 200
    })
}

authenticationController.meUser = async (req, res) => {
   
    res.json({
        status: 200
    })
}


module.exports = authenticationController;