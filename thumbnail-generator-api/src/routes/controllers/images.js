const sendThumbnails = async function (req, res) {
  try {
    res.status(200).send("thumbnails");
  } catch (error) {
    console.log(error);
  }
};


const addImage = async function (req, res) {
    try {
      res.status(200).send("post ok");
    } catch (error) {
      console.log(error);
    }
  };
module.exports = {
  sendThumbnails,
  addImage
};
