const express  = require('express');
const router   = express.Router();

const userController = require('../backend/controllers/UserController');

router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.showUser);
router.put('/users/:id', userController.updateUser);

router.get('/', (req, res) =>{
    res.send('Hello word');
});

module.exports = router;