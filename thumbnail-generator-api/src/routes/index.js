const { Router } = require('express');

const imagesRoute = require('./images');

const router = Router();

router.use('/images', imagesRoute);


module.exports = router;