const express = require("express");
const router = express.Router();
const { index, actionStatus } = require("./controller");
const { isLoginAdmin } = require("../middlewares/auth");

/* GET home page. */
router.use(isLoginAdmin);
router.get("/", index);
router.put("/status/:id", actionStatus);

module.exports = router;
