const router = require("express").Router();
const configurationController = require("../controller/configuration.controller");
router.post("/", async (req, res, next) => {
  console.log("configuration post");
  try {
    let response = await configurationController.addConfiguration(req.body);
    res.send(response);
  } catch (error) {
    console.log(error);
    res.send({ failed: "failed" });
  }
});

module.exports = router;
