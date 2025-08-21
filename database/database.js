const Sequelize = require('sequelize');

const sequelize = new Sequelize('projetosGit','postgres','root',
    {
        host: 'localhost',
        dialect: 'postgres'
    });

module.exports = sequelize;