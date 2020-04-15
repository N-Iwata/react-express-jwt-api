const router = require("express").Router();
const verifyToken = require('../middlewares/verifyToken');

// ----------------------
// GET /api/v1/users
// ----------------------
router.get("/", verifyToken, (req, res) => {
  let results = {};
  if( req.decoded.userId == "00001" ){
    results = {
      "userId": "00001",
      "userName": "Tom",
    };
  }
  
  res.json(results);
});

module.exports = router;