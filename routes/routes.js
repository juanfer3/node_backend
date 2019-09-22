const express  = require('express');
const router   = express.Router();
/*
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
/* */

var upload = require('../config/multer')

const userController = require('../backend/controllers/UserController');
const photosController = require('../backend/controllers/PhotosController');




// routes
router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.showUser);
router.put('/users/:id', userController.updateUser);

router.get('/photos', photosController.getPhotos);
router.route('/photos')
    .post( upload.single('image'), photosController.createPhoto )
/*
router.get('/photos', photosController.getPhotos);
router.post('/photos', upload.single('images'), photosController.createPhoto);
/* */

router.get('/', (req, res) =>{
    res.send('Hello word');
});

module.exports = router;