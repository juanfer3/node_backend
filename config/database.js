const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/mean-crud';

    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))

mongoose.set('useFindAndModify', false);

module.exports = mongoose;