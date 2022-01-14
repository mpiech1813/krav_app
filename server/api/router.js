const router = require("express").Router();

// import routes
const adminRouter = require("./adminRouter");
const studentRouter = require("./studentsRouter");
const loginRouter = require("./loginRouter");

// make the connections
router.use("/admin", adminRouter);
router.use("/student", studentRouter);
router.use("/login", loginRouter);

module.exports = router;
