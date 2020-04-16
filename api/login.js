const router = require("express").Router();
const jwt = require("jsonwebtoken");
const config = require("../config/jwt.config");

// ----------------------
// POST /api/v1/login
// ----------------------
router.post("/", (req, res) => {
  // 本来はデータベースからユーザーIDとパスワードを認証するが割愛
  if( req.body.userId == "00001" && req.body.passWord == "qwerty" ){
    const payload = {
      userId : req.body.userId,
    }
    const token = jwt.sign(payload, config.jwt.secret, config.jwt.options);

    res.json({
      isSuccess: true,
      token: token
    });
  }
  else{
    res.json({ isSuccess: false, message: "ユーザーIDまたはパスワードが違います。" });
  }

});

module.exports = router;
