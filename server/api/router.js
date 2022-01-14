const router = require("express").Router();

// import routes
const adminRouter = require("./adminRouter");
const studentRouter = require("./studentsRouter");
const loginRouter = require("./loginRouter");
const accessTokenROuter = require("./accessTokenRouter");

// make the connections
router.use("/admin", adminRouter);
router.use("/student", studentRouter);
router.use("/login", loginRouter);
router.use("/google/callback", accessTokenROuter);

module.exports = router;
