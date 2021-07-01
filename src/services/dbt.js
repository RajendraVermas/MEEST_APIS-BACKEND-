const config = require("../config/config");

const { notification } = require("../models");

module.exports = {
  create,
};

async function create(params) {
  await notification.create(params);
}
