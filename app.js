const createError = require("http-errors");
const express = require("express");
require("path");
const logger = require("morgan");
express();
var cors = require("cors");
module.exports = function (app) {
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(cors({ credentials: true, origin: true }));

  const api = require("./routes/api");

  app.use("/api/v1", api);

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PATCH,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next(createError(404));
  });

  app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    next();
    res.status(err.status || 500);
    res.render("error");
  });
  return app;
};
