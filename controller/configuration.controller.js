const db = require("../model");
const Configuration = db.configuration;

exports.addConfiguration = async (data) => {
  console.log("inside controller config");
  console.log(data);
  try {
    let existingConfig = await Configuration.findOne({
      where: {
        userId: "asdasd",
        templateId: data.config.templateId,
      },
    });
    if (existingConfig != null) {
      throw new Error("configuration already exists");
    }
    let config = await Configuration.create({
      userId: "asdasd",
      inputs: data.config.userInput,
      templateId: data.config.templateId,
    });
    return { done: config };
  } catch (error) {
    console.log(error);
    throw new Error({
      message: "Failed to create template",
      reason: error.name,
    });
  }
};
