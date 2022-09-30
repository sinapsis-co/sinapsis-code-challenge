const { Router } = require('express');

const postRoutes = Router();

//get post put delete
postRoutes.get('/posts', (req, res) => {
  res.send('Hello from the posts page!');
});





module.exports = postRoutes;