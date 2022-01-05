const loginRouter = require("express").Router();

loginRouter.get("/", async (req, res, next) => {
  try {
    //redirection to Google's login API
    // I am going to start working on this
    require.redirect();
  } catch (error) {
    console.log("error occured in google oauth link");
    next(error);
  }
});

module.exports = loginRouter;
