const express = require("express");
const app = express();

app.use("/", express.static(__dirname));

app.listen(8001, () => {
  console.log("Application started and Listening on port 8001");
});

app.post("/v1/comments", (req, res) => {
  console.log("called post on webserver");
  console.log(req);

  res.send("POST Called");
});

app.get("/", (req, res) => {
  console.log("called get on webserver");
  res.sendFile(__dirname + "/echo.html");
});

// app.get("/", (req, res) => {
//   console.log("called get on webserver");
//   res.sendFile(__dirname + "/echo.html");
// });
