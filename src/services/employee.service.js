const config = require("../config/config");

const { Employee } = require("../models");

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll() {
  return await Employee.findAll();
}

async function getById(id) {
  return await getEmployee(id);
}

async function create(params) {
  await Employee.create(params);
}

async function update(id, params) {
  const Employee = await getEmployee(id);
}

async function _delete(id) {
  const Employee = await getEmployee(id);
  await Employee.destroy();
}
