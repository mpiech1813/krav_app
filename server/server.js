const express = require("express");
const app = express();
const path = require("path");
const router = require("./api/router");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.sendFile(index.html);
});

app.use("/api", router);

// to handle majority of error message
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status).send({ error: err.message });
});

// to handle request for page that doesnt exist
app.use((req, res, next) => {
  res.status(404).send("Are you lost? That page doesn't seem to exist.");
});

// other errors
app.use((req, res, next) => {
  res.status(500).send({ error: err });
});

module.exports = app;
