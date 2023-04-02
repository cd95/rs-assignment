var router = require("express").Router();

router.use("/api/source/template", require("./template.route"));
router.use("/api/source/configuration", require("./configuration.route"));
module.exports = router;
