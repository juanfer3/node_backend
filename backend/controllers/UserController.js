const User = require('../models/User');

const userController = {}

userController.getUsers = async (req, res) => {
    const users = await User.find();
    res.json({
        status: 200,
        users: users
    })
}

userController.createUser = async (req, res) => {
    const user = new User(req.body);
    const user_create = await user.save();
    console.log(user);
    res.json({
        status: 200,
        users: user_create
    })
}

userController.showUser = async (req, res) => {
    user = await User.findById(req.params.id);
    //console.log(req.params.id)
    res.json({
        status: 200,
        user: user
    })
}


userController.updateUser = async (req, res) => {
    const { id } = req.params.id;
    const user = {
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        books: req.body.books
    }

    const user_update = await User.findOneAndUpdate(id, { $set: user }, { new: true, useFindAndModify: false });

    //console.log(req.params.id)
    res.json({
        status: 200,
        user: user_update
    })
}

module.exports = userController;