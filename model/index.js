const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const queryInterface = sequelize.getQueryInterface();
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.template = require("./template.model.js")(sequelize, Sequelize);
db.configuration = require("./configuration.model.js")(sequelize, Sequelize);

db.configuration.belongsTo(db.template, {
  foreignKey: "templateId",
  as: "template",
});
module.exports = db;
