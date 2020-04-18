const jwt = require("jsonwebtoken");
const config = require("../config/jwt.config");

function verifyToken(req, res, next) {
  // console.log(req.headers.authorization);
  // →Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwMDAwMSIsImlhdCI6MTU4NzAwMDE2NiwiZXhwIjoxNTg3MDAxMzY2fQ.sx7gma9MU2Wh-fw9L60-mgmM_7TlMWKUhmg7lKIRCXs
  // splitで半角スペースで分割して後ろ側がTokenになる
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (token) {
    jwt.verify(token, config.jwt.secret, function (error, decoded) {
      if (error) {
        return res.status(403).send({
          isSuccess: false,
          message: "トークンの認証に失敗しました。",
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).send({
      isSuccess: false,
      message: "トークンがありません。",
    });
  }
}
module.exports = verifyToken;
