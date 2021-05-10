const statusAPI = require("./status");

const API = require("express").Router();

API.use("/status", statusAPI);

module.exports = {
  statusAPI,
  API,
};
