const accessTokenRouter = require("express").Router();

accessTokenRouter.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    console.log("error occured in access token router");
    next(error);
  }
});

module.exports = accessTokenRouter;
