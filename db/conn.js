const { Sequelize } = require('sequelize')

const db = new Sequelize('db_maquinario','root','senai',{
    host: 'localpost',
    dialect: 'mysql',
    port: 3306
})

module.exports = db