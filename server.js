const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./public/db.json");
const middlewares = jsonServer.defaults({ static: "./build" });
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);

var express = require("express");
var app = express();

var newBaseURL =
  process.env.NEW_BASE_URL || "https://react-redux-online-shop.herokuapp.com/";
var redirectStatus = parseInt(process.env.REDIRECT_STATUS || 302);

app.get("*", function (request, response) {
  response.redirect(redirectStatus, newBaseURL + request.url);
});

app.listen(port, function () {
  console.log("Listening on " + port);
});
