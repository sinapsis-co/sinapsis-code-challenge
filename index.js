//import express package
const app = require('express')();
//define a port
const PORT = 8080;



app.get('/thumbnail', (req, res) => {

});

app.listen(
  PORT,
  () => console.log(`running successfully on http://localhost:${PORT}`)
);

