const adminRouter = require("express").Router();
const Admin = require("../db/models/Admin");

adminRouter.get("/", async (req, res, next) => {
  try {
    const admins = await Admin.findAll();
    res.send(admins);
  } catch (error) {
    console.log("error occured in admin router");
    next(error)
  }
});

adminRouter.get("/:adminName", async (req, res, next) => {
  try {
    const adminName = req.params.adminName;
    const admin = await Admin.findOne({ where: { userName: adminName } });

    res.send(admin);
  } catch (error) {
    console.log("error occured in admin /:user");
    next(error)
  }
});

module.exports = adminRouter;
