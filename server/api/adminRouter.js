const adminRouter = require("express").Router();
const Admin = require("../db/models/Admin");

adminRouter.get("/", async (req, res, next) => {
  try {
    const admins = await Admin.findAll();
    res.send(admins);
  } catch (error) {
    console.log("error occured in admin router");
  }
});

module.exports = adminRouter;
