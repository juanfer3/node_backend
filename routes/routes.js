const express  = require('express');
const router   = express.Router();

const access = require('../config/jwt');

/*
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
/* */

var upload = require('../config/multer')

const userController = require('../backend/controllers/UserController');
const photosController = require('../backend/controllers/PhotosController');
const authenticationController = require('../backend/controllers/AuthenticationController');

// routes
router.post('/login', authenticationController.login);
router.post('/register', authenticationController.register);
router.get('/me', authenticationController.meUser);

router.get('/users', access,userController.getUsers);
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