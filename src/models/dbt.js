const mysql = require("mysql2");
const { DataTypes } = require("sequelize");
require("../models/index");

module.exports = model;
function model(sequelize) {
  const attributes = {
    date: { type: DataTypes.STRING, allowNull: false },
    body: { type: DataTypes.STRING, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    // notificationid: { type: DataTypes.INTEGER, allowNull: false },
  };
  // model.associate = (models) => {
  //   model.belongsTo(models.User, { foreignKey: "userid", targetKey: "id" });
  // };

  return sequelize.define("notification", attributes);
}
