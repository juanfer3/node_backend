const Photo = require('../models/Photos');
const upload = require('multer');
const path   = require('path');




const photoController = {}

photoController.getPhotos = async (req, res) => {
    const photos = await Photo.find();
    res.json({
        status: 200,
        photos: photos
    })
}

photoController.createPhoto = async (req, res) => {
    const newPhoto = { title : req.body.title , description:  req.body.title, imagePath: req.file.path };
    const photo = new Photo(newPhoto);
    await photo.save();    

    return res.json({
        status: 200,
        photo: photo
    })
}

photoController.showPhoto = async (req, res) => {
    photo = await Photo.findById(req.params.id);
    //console.log(req.params.id)
    res.json({
        status: 200,
        photo: photo
    })
}



module.exports = photoController;