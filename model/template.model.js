const DataTypes = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  const Template = sequelize.define("template", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    fields: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  });
  return Template;
};
