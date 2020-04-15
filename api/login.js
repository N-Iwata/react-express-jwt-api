const router = require("express").Router();
const jwt = require("jsonwebtoken");
const config = require("../config/jwt.config");

// ----------------------
// POST /api/v1/login
// ----------------------
router.post("/", (req, res) => {
  if( req.body.userId == "test" && req.body.passWord == "qwerty" ){
    const payload = {
      userId : req.body.userId,
    }
    const token = jwt.sign(payload, config.jwt.secret, config.jwt.options);

    res.json({
      success: true,
      token: token
    });
  }
  else{
    res.json({ success: false, message: "ユーザーIDまたはパスワードが違います。" });
  }

});

module.exports = router;
