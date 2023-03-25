const db = require("../model");
const Template = db.template;

exports.addTemplate = async (data) => {
  console.log("inside controller");
  console.log(data);

  try {
    let templateObj = {
      type: data.type,
      fields: data.fields,
    };
    let template = await Template.create(templateObj, { plain: true });
    return template;
  } catch (error) {
    console.log(error);
    throw new Error({
      message: "Failed to create template",
      reason: error.name,
    });
  }
};
exports.findTemplates = async () => {
  try {
    let templates = await Template.findAndCountAll({ plain: true });
    return { count: templates.count, templates: templates.rows };
  } catch (error) {
    console.log(error);
    throw new Error({
      message: "Failed to get templates",
      reason: error.name,
    });
  }
};
exports.findOneTemplate = async (type) => {
  try {
    let template = await Template.findOne({
      where: { type: type },
      plain: true,
    });
    return template;
  } catch (error) {
    console.log(error);
    throw new Error({
      message: "Failed to get templates",
      reason: error.name,
    });
  }
};
