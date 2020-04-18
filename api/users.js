const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");

// ----------------------
// GET /api/v1/users
// ----------------------
router.get("/", verifyToken, (req, res) => {
  // 本来はデータベースからユーザーIDを元にデータを取得するが割愛
  let results = {};
  if (req.decoded.userId == "00001") {
    results = {
      userId: "00001",
      name: "Tom",
    };
  }

  res.json(results);
});

module.exports = router;
