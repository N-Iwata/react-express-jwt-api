const jwt = require("jsonwebtoken");
const config = require("../config/jwt.config");

function verifyToken(req, res, next) {
  const token = req.body.token || req.query.token || req.headers["x-access-token"];
  if (token) {
    jwt.verify(token, config.jwt.secret, function(error, decoded) {
      if (error) {
        return res.json({ success: false, message: "トークンの認証に失敗しました。" });
      }
      else {
        req.decoded = decoded;
        next();
      }
    });
  }
  else {
    return res.status(403).send({
        success: false,
        message: "トークンがありません。",
    });

  }
}
module.exports = verifyToken;