const { BOOLEAN, STRING, UUID, UUIDV4 } = require("sequelize");

const db = require("../db");

const Student = db.define("student", {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    unique: true,
  },
  fName: {
    type: STRING,
    allowNull: false,
    defaultValue: "Anonymous",
    validate: {
      notEmpty: true,
    },
  },
  lName: {
    type: STRING,
    allowNull: false,
    defaultValue: "User",
    validate: {
      notEmpty: true,
    },
  },
  picture: {
    // check if better type is available
    type: STRING,
  },
  fShot: {
    type: BOOLEAN,
    defaultValue: false,
  },
  sShot: {
    type: BOOLEAN,
    defaultValue: false,
  },
  booster: {
    type: BOOLEAN,
    defaultValue: false,
  },
});

// may want to disable created at and updated ay columns in future

module.exports = Student;
