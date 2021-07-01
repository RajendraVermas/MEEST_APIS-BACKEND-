const mysql = require("mysql2");
const { DataTypes } = require("sequelize");
require("../models/index");

module.exports = model;
function model(sequelize) {
  const attributes = {
    pTitle: { type: DataTypes.STRING, allowNull: false },
    pBody: { type: DataTypes.STRING, allowNull: false },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    profile: { type: DataTypes.STRING, allowNull: false },
    designation: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    gender: { type: DataTypes.STRING, allowNull: false },
    birthDate: { type: DataTypes.STRING, allowNull: false },
    mobNo: { type: DataTypes.STRING, allowNull: false },
    officeNo: { type: DataTypes.STRING, allowNull: false },
    experience: { type: DataTypes.STRING, allowNull: false },
    highestDeegree: { type: DataTypes.STRING, allowNull: false },
    dateOfJoining: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    workExperience: { type: DataTypes.STRING, allowNull: false },
    education: { type: DataTypes.STRING, allowNull: false },
  };
  model.associate = (models) => {
    model.belongsTo(models.User, { foreignKey: "userid", targetKey: "id" });
  };

  return sequelize.define("Employee", attributes);
}
