const DataTypes = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  const Configuration = sequelize.define("configuration", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: Sequelize.STRING,
      defaultValue: "",
      allowNull: false,
    },
    inputs: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  });
  return Configuration;
};
