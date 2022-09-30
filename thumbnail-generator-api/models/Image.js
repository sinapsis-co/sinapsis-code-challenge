const mongoose = require('mongoose');

//create schema
const ImageSchema = mongoose.Schema({
  title: String,
  description: String,
  img:
  {
      data: Buffer,
      contentType: String
  }
});

module.exports = new mongoose.model('Image', ImageSchema);