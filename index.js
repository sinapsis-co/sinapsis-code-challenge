//body parser
const bodyParser = require('body-parser');
//define express
const express =  require('express');
//define app
const app = express();
//define mongoose 
const mongoose = require('mongoose');
//multer
const multer = require('multer');
//dotenv
require('dotenv/config');

//import schema
const ImageSchema = require('./thumbnail-generator-api/models/Image')

//define port
const port = 8080;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//connect to db
mongoose.connect('mongodb://localhost/Images', () => console.log('db connected'));

//storage
const Storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: Storage
}).single('testImage');


//routes
app.get('/', (req, res) => {
  res.send('upload image!');
});

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err) {
      console.log('error')
    } else {
      const newImage = new ImageSchema({
        name: req.body.name,
        image: {
          data: req.file.filename,
          contentType: 'image/png/jpeg'
        }
      })
      newImage.save()
      .then(() => res.send('successfully uploaded'))
      .catch(err => console.log(err));
    }
  });
});



//listen to the server
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));