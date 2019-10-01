const User = require('../models/User')
const jwt  = require('jsonwebtoken');
const bcrytp = require('bcryptjs');
const SECRET_KEY = 'secretkey1234567890';

const authController = {}

authController.signup = async (req, res) => {
    const user = new User(req.body);
    
    const expiresIn = 24 * 50 * 60;
    await user.save();
    const accessToken = jwt.sign({ id: user.id },
        SECRET_KEY, {
            expiresIn: expiresIn
        }
    )
    
    res.json({
        status: 200,
        users: user,
        token: accessToken,
        expiresIn: expiresIn
    })
}

authController.login = async (req, res) =>{
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
    res.status(200).json({auth: true, token});
    /* */
}




module.exports = authController;