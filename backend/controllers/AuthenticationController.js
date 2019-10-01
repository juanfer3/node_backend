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
   
    const user = await User.findOne({username: req.body.username})
    if(!user) {
        return res.status(404).send("The username doesn't exists")
    }
    const validPassword = await user.comparePassword(req.body.password, user.password);
    if (!validPassword) {
        return res.status(401).send({auth: false, token: null});
    }
    const token = jwt.sign({id: user._id}, config.secret, {
        expiresIn: 60 * 60 * 24
    });
    res.status(200).json({auth: true, token, user});
}

authenticationController.meUser = async (req, res) => {
   
    res.json({
        status: 200
    })
}

authenticationController.logout = async (req, res) => {
    res.status(200).send({ auth: false, token: null });
}


module.exports = authenticationController;