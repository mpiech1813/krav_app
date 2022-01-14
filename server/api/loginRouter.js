//redirection to Google's login API

const loginRouter = require("express").Router();

loginRouter.get("/", async (req, res, next) => {
  try {
    const connectionParams = {
      redirect_uri: "",
      response_type: "",
      scope: "",
    };

    res.redirect(
      `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.client_id}`
    );
  } catch (error) {
    console.log("error occured in google oauth link");
    next(error);
  }
});

module.exports = loginRouter;
