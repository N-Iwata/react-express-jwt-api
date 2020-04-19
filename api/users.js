const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");

// ----------------------
// GET /api/v1/users
// ----------------------
router.get("/", verifyToken, (req, res) => {
  // 本来はデータベースからユーザーIDを元にデータを取得するが割愛
  let results = {};
  if (req.decoded.userId == "001") {
    results = {
      userId: "001",
      name: "Tom",
    };
  } else if (req.decoded.userId == "002") {
    results = {
      userId: "00001",
      name: "Mike",
    };
  }

  res.json(results);
});

module.exports = router;
