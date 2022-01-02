const { DataTypes, UUIDV4 } = require("sequelize");

const db = require("../db");

const Admin = db.define("admin", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  passqord: {
    type: DataTypes.STRING,
  },
});

module.exports = Admin;
