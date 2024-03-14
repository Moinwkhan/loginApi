const express = require("express");
const {
  GetUserSingin,
  Userlogin,
  UserSingin,
  GetDataForUser,
  AddDataForUser,
} = require("../controller/control");
const router = express.Router();

router.post("/login", Userlogin);
router.post("/signup", UserSingin);
router.get("/signup", GetUserSingin);
router.get("/adddata/:userId", GetDataForUser);
router.post("/adddata/:userId", AddDataForUser);

module.exports = router;
