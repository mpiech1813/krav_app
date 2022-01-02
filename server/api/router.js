const router = require("express").Router();

// import routes
const adminRouter = require("./adminRouter");
const studentRouter = require("./studentsRouter");

// make the connections
router.use("/admin", adminRouter);
router.use("/student", studentRouter);

module.exports = router;
