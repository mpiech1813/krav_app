const studentRouter = require("express").Router();
const Student = require("../db/models/Student");

studentRouter.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.send(students);
  } catch (error) {
    console.log("error occured in student router");
  }
});

module.exports = studentRouter;
