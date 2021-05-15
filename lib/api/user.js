const router = require("express").Router();
const { encription, genRandomString } = require("../script/crypto");
const { User } = require("../db/models");

router.route("/login").post((request, response) => {
    let { email, password } = request.body;
    User.findOne({ email }, (er, user) => {
      if (er) {response.status(400).json({ result: false })}
     else if (user) {
        let hashPass = encription({ salt: user.salt, password });
        if (hashPass === user.password)
          response.status(200).json({ result: true, user });
        else
          response
            .status(400)
            .json({ result: false, message: "password is wrong" });
      } else {
        response.status(400).json({ result: false, message: "user not exist" });
      }
    });
  });
  
router.route("/register").post((request, response) => {
  let { firstName, lastName, email, password } = request.body;
  let salt = genRandomString({ stringLength: 20 });
  let hasPAss = encription({ password, salt });
  User.findOne({ email }, (er, res) => {
    if (er) response.status(400).json({ result: false });
    if (res)
      response.status(400).json({ result: false, message: "user exist" });
    else {
      User.create(
        { firstName, lastName, email, password: hasPAss, salt },
        (er) => {
          if (er) response.status(200).json({ result: true });
            else
          response.status(400).json({ result: false });
        }
      );
    }
  });
});


router.route("/update").put((request, response) => {
    let { firstName, lastName, email ,_id} = request.body;

    User.findOne({ _id }, (er, res) => {
      if (er) response.status(400).json({ result: false });
      if (!res)
        response.status(400).json({ result: false, message: "user not exist" });
      else {
        User.updateOne({_id},
          { firstName, lastName, email },
          (er) => {
            if (!er) response.status(200).json({ result: true });
else
            response.status(400).json({ result: false });
          }
        );
      }
    });
  });

router.route("/find/:email").get((request, response) => {
    let { email } = request.params;
    User.findOne({ email }, (er, user) => {
      if (er) response.status(400).json({ result: false });
      if (user) {
      
          response.status(200).json({ result: true, user });
        
      } else {
        response.status(400).json({ result: false, message: "user not exist" });
      }
    });
  });
  

module.exports = router;
