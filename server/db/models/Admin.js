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
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
});

// will have to encrypt the passwords
// may want to disable created at and updated ay columns in future

module.exports = Admin;
