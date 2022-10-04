//body parser
const bodyParser = require('body-parser');
//define express
const express =  require('express');
//define app
const app = express();
const path = require('path');
//define mongoose 
// const mongoose = require('mongoose');
//multer
// const multer = require('multer');
//sharp img resizing
const sharp = require('sharp');
const upload = require('./thumbnail-generator-api/upload-files')
//dotenv
require('dotenv').config();


//define port
const port = 8080;
const DIST_DIR = path.resolve(__dirname, './dist');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(DIST_DIR));


//connect to db
// mongoose.connect(process.env.DB_CONNECTION, () => console.log('db connected'));

//storage
// const Storage = multer.diskStorage({
//   destination: 'uploads',
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   }
// });

// const upload = multer({
//   storage: Storage
// }).single('testImage');


//routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(DIST_DIR, 'index.html'))
})
//post
// app.post('/upload', (req, res) => {
//   upload(req, res, (err) => {
//     if(err) {
//       console.log('error')
//     } else {
//       const newImage = new ImageSchema({
//         name: req.body.name,
//         image: {
//           data: fs.readFileSync('/uploads', req.file.filename),
//           contentType: 'image/png/jpeg'
//         }
//       })
//       newImage.save()
//       .then(() => res.send('successfully uploaded'))
//       .catch(err => console.log(err));
//     }
//   });
// });

// app.post('/upload', (req, res) => {
//   upload(req, res, (err) => {
//     if(err) {
//       console.log('error')
//     } else {
//       sharp(inputBuffer)
//   .resize(320, 240)
//   .toFile('output.webp', (err, info) => res.send('info: ', info));
//     }
//   });
// });

//put

//delete
// app.delete('/delete', (req, res) => {
//   res.send('DELETE Request Called')
// })



//listen to the server
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));