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
const postsRoutes = require('./thumbnail-generator-api/routes/posts');

//routes
//
app.get('/', (req, res) => {
  res.send('Hello from the homepage!');
});

app.use('/posts', postsRoutes);


//connect to db
mongoose.connect(process.env.DB_CONNECTION, () => console.log('connected to DB'));

//listen to the server
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));