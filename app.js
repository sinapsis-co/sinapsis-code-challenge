//define express
const express =  require('express');
//define app
const app = express();
//define port
const port = 8080;

//routes
app.get('/', (req, res) => {
  res.send("listening successfully!");
});

//listen to the server
app.listen(port);