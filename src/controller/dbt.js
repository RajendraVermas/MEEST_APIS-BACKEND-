const express = require("express");
const router = express.Router();
const Joi = require("joi");

const notificationService = require("../services/dbt");

router.post("/notification", notification);

// router.get("/getnotification", getAll);

// router.get("/:id", getById);

// router.delete("/:id", _delete);

module.exports = router;

function notification(req, res, next) {
  notificationService
    .create(req.body)
    .then(() => res.json({ message: "data updated  successful" }))
    .catch(next);
}

// function getAll(req, res, next) {
//   employeeService
//     .getAll()
//     .then((users) => res.json(users))
//     .catch(next);
// }

// function getCurrent(req, res, next) {
//   res.json(req.user);
// }

// function getById(req, res, next) {
//   employeeService
//     .getById(req.params.id)
//     .then((user) => res.json(user))
//     .catch(next);
// }

// function update(req, res, next) {
//   notificationService
//     .update(req.params.id, req.body)
//     .then((user) => res.json(user))
//     .catch(next);
// }

// function _delete(req, res, next) {
//   notificationService
//     .delete(req.params.id)
//     .then(() => res.json({ message: "User deleted successfully" }))
//     .catch(next);
// }
