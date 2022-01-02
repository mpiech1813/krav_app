const router = require("express").Router();

// import routes
const adminRouter = require("./adminRouter");

// make the connections
router.use("/admin", adminRouter);

module.exports = router;
