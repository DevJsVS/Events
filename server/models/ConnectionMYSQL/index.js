const Sequelize = require('sequelize');
const config = require('../../consts/constsForConnectionMYSQL');

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        idle: config.pool.idle
    }
});

module.exports = sequelize;