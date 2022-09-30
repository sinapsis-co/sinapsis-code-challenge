//define express
const express =  require('express');
//define mongoose 
const mongoose = require('mongoose');
//dotenv
require('dotenv/config');
//define app
const app = express();
//define port
const port = 8080;

//import routes
const uploadRoutes = require('./thumbnail-generator-api/routes/images');
app.use('/images', uploadRoutes);
//routes
app.get('/', (req, res) => {
  res.send('Log in to upload photo!');
});




//connect to db
mongoose.connect(process.env.DB_CONNECTION, () => console.log('connected to DB'));

//listen to the server
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));