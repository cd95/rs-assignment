module.exports = (sequelize, Sequelize) => {
  const Template = sequelize.define("template", {
    title: {
      type: Sequelize.STRING,
    },
  });

  return Template;
};
