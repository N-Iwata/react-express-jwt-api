const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, x-access-token, Authorization"
  );
  next();
};
app.use(allowCrossDomain);

app.use(
  "/api/v1",
  (() => {
    const router = express.Router();
    router.use("/login", require("./api/login.js"));
    router.use("/users", require("./api/users.js"));
    return router;
  })()
);

app.listen(5000, function () {
  console.log("Example app listening on port 5000!");
});
