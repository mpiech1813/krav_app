//redirection to Google's login API

const loginRouter = require("express").Router();

loginRouter.get("/", async (req, res, next) => {
  try {
    const connectionParams = {
      redirect_uri: "http://localhost:1813/api/google/callback",
      response_type: "token",
      scope: "https%3A//www.googleapis.com/auth/drive.metadata.readonlyx",
    };

    res.redirect(
      `https://accounts.google.com/o/oauth2/v2/auth?
      response_type=token&
       client_id=${process.env.client_id}&
       redirect_uri:${connectionParams.redirect_uri}&
       scope:${connectionParams.scope}`
    );
  } catch (error) {
    console.log("error occured in google oauth link");
    next(error);
  }
});

module.exports = loginRouter;
