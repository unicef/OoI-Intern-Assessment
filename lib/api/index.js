const statusAPI = require("./status");

const API = require("express").Router();

API.use("/status", statusAPI);

API.get('/users', (req, res, next) => {
    console.log('user get');
});

API.post('/users', (req, res, next) => [
    console.log("user post")
])

API.put('/users', (req, res, next) => [
    console.log("user put")
])



module.exports = {
    statusAPI,
    API,
};