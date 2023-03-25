const router = require("express").Router();
const templateController = require("../controller/template.controller");
router.get("/", async (req, res, next) => {
  console.log("get all templates");
  res.send(await templateController.findTemplates());
});
router.get("/:type", async (req, res, next) => {
  console.log(req.params.type);
  res.send(await templateController.findOneTemplate(req.params.type));
});
router.post("/", async (req, res, next) => {
  console.log("template post");
  try {
    let response = await templateController.addTemplate(req.body);
    res.send(response);
  } catch (error) {
    console.log(error);
    res.send({ failed: "failed" });
  }
});

module.exports = router;
