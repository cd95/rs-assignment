var router = require("express").Router();

router.use("/api/source/template", require("./template.route"));

module.exports = router;
