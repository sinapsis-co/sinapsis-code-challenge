const mongoose = require('mongoose');

//create schema
const ImageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    data: Buffer,
    contentType: String
  }
});

module.exports = mongoose.model('Image', ImageSchema);