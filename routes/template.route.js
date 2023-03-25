const router = require("express").Router();
const templateController = require("../controller/template.controller");
router.get("/", (req, res, next) => {
  console.log("test");
  res.send(templateController.test());
});

module.exports = router;
