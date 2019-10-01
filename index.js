const express = require ('express');
const morgan = require ('morgan');
const path = require('path');
const cors = require('cors');

const { mongoose } = require('./config/database');


const app = express();



// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());

//Routes
app.use( require('./routes/routes') )

// this folders for this application will be used to store public file images
app.use('/uploads', express.static(path.resolve('uploads')));

app.listen(app.get('port'), () =>{
    console.log('server on port: ', app.get('port'));
});