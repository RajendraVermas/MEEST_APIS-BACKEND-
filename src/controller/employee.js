const express = require("express");
const router = express.Router();
const Joi = require("joi");

const employeeService = require("../services/employee.service");

router.post("/employee", employee);

router.get("/all", getAll);

router.get("/:id", getById);

router.delete("/:id", _delete);

module.exports = router;

function employee(req, res, next) {
  employeeService
    .create(req.body)
    .then(() => res.json({ message: "data updated  successful" }))
    .catch(next);
}

function getAll(req, res, next) {
  employeeService
    .getAll()
    .then((users) => res.json(users))
    .catch(next);
}

function getCurrent(req, res, next) {
  res.json(req.user);
}

function getById(req, res, next) {
  employeeService
    .getById(req.params.id)
    .then((user) => res.json(user))
    .catch(next);
}

function update(req, res, next) {
  employeeService
    .update(req.params.id, req.body)
    .then((user) => res.json(user))
    .catch(next);
}

function _delete(req, res, next) {
  employeeService
    .delete(req.params.id)
    .then(() => res.json({ message: "User deleted successfully" }))
    .catch(next);
}
