const loginRouter = require("express").Router();

loginRouter.get("/", async (req, res, next) => {
  try {
    //redirection to Google's login API
    require.redirect(`https://accounts.google.com/o/oauth2/v2/auth`);
  } catch (error) {
    console.log("error occured in google oauth link");
    next(error);
  }
});

module.exports = loginRouter;
