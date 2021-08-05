const statusAPI = require("./status");
const {
    MongoDB
} = require("../../lib/db");
const defaultConfig = require("../../config");
let db = new MongoDB(defaultConfig.db);
let User = db.models.User;
const API = require("express").Router();

API.use("/status", statusAPI);

API.get('/users', (req, res, next) => {
    console.log('user get');
});

API.post('/users/login', async(req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    let user = await User.findOne({
        username: username,
        password: password
    });

    if (user) {
        return res.status(200).json("success");
    }

    return res.status(401).json("Forbiden")
});

API.post('/users/register', async(req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;

    let user = await User.findOne({
        username: username
    });

    if (user) {
        return res.status(409).json("user exist")
    }

    let newUser = await User.create({
        username: username,
        password: password,
        email: email
    })

    return res.status(200).json(newUser)
});


API.put('/users', (req, res, next) => [
    console.log("user put")
])



module.exports = {
    statusAPI,
    API,
};