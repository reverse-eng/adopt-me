//server.js
const express = require("express");
//const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
const baseDir = __dirname;
//app.use(favicon(__dirname + "/dist/favicon.ico"));
// the __dirname is the current directory from where the script is running
app.use(express.static(baseDir));
app.use(express.static(path.join(baseDir, "dist")));
app.get("/ping", function(req, res) {
  return res.send("pong");
});
app.get("/*", function(req, res) {
  res.sendFile(path.join(baseDir, "dist", "index.html"));
});
app.listen(port);
console.log(`App Running at ${port}`);
