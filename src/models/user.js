const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: true },

    status: { type: DataTypes.BOOLEAN, alllowNull: true },
  };

  const options = {
    defaultScope: {
      attributes: { exclude: ["password"] },
    },

    scopes: {
      withSecretColumns: {
        attributes: { include: ["password"] },
      },
    },
  };

  return sequelize.define("User", attributes, options);
}
