const API = require("express").Router();


const statusAPI = require("./status");
const userApi = require('./user')

API.use("/status", statusAPI);
API.use("/user", userApi);



module.exports = {
  statusAPI,
  API,
};
