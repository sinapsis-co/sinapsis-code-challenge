const server = require("./src/app.js");

server.listen(process.env.PORT || 3000, () => {
  console.log("listening at: ", process.env.PORT || 3000);
});
