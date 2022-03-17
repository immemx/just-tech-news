// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

// import dotenv
require('dotenv').config();

// create connection to our databse, pass in your MySQL information for username nad password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;