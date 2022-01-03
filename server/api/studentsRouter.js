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

studentRouter.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const student = await Student.findOne({ where: { studentID: id } });
    res.send(student);
  } catch (error) {
    console.log("error occured in find by student id");
  }
});

module.exports = studentRouter;
