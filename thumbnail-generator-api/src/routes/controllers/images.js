const { createThumbnails, validateObject } = require("../services/images");



const addImage = async function (req, res) {
  try {
    const image = req.file;
    console.log(image)
    const validImage = validateObject(image)
    if(validImage){
      res.status(400).send(validImage)
    }
    const response = await createThumbnails(image);
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  addImage,
};
