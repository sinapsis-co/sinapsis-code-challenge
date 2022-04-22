const { Router } = require("express");
const multer  = require('multer');
const { addImage } = require("./controllers/images");
const router = Router();
const storageStrategy = multer.memoryStorage()
const upload = multer({ storage: storageStrategy })
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});



router.post("/", upload.single('image'),addImage);

module.exports = router;