const User = require("../models/users");
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const router = express.Router();

// register
router.post("/register", async (req, res) => {
  // res.json(register.filter((post) => post.username == req.users.name));
  const { email } = req.body;
  const result = await User.findOne({ where: { email: email } });
  if (result) {
    //  console.log("resgister", result);
    res.status(200).send({ message: "user alredy exit" });
  } else {
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      phoneNumber: req.body.phoneNumber,
    })
      .then((users) => {
        var token = jwt.sign({ id: users.id }, "config.secret", {
          expiresIn: 86400, // expires in 24 hours
        });
        res.send({
          message: "resgister succesfully",
          token: token,
        });
      })
      .catch((error) => {
        res.send(error);
      });
    // var hashedPassword = bcrypt.hashSync(req.body.password, 8)
    // users.create({
    //   name : req.body.name,
    //   email : req.body.email,
    //   password : hashedPassword
    // },
  }

  //const accessToken = jwt.sign(users, process.env.ACCESS_TOKEN_SECRET);
  // res.json({ accessToken: accessToken });
});

// login

router.post("/login", async (req, res) => {
  const { email } = req.body;
  await User.findOne({
    where: { email: email },
    attributes: ["name", "email", "phoneNumber"],
  })
    .then((users) => {
      if (users) {
        res.send({ status: true, message: "login succesfully", body: users });
      } else {
        res.status(200).send({ status: false, message: "user not found" });
      }
    })
    .catch((error) => {
      res.status(400).json("user not found");
    });
});

// getAllUsers

router.get("/getAll", async (req, res) => {
  await User.findAll({})
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(400).json("oops");
    });
});

// user Serach
