const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const Maquinario = db.define('maquinario',{
    codMaquinario:{
        type: DataTypes.INTEGER,
        primarykey: true,
        autoincrement: true
    },
    nome:{
        type: DataTypes.STRING,
        allownull: true
    },
    marca:{
        type: DataTypes.STRING,
        allownull: true
    },
    porte:{
        type: DataTypes.STRING,
        allownull: true
    },
    anoFab:{
        type: DataTypes.INTEGER,
        allownull: true
    },
    custo:{
        type: DataTypes.INTEGER,
        allownull: true
    },
    precoFin:{
        type: DataTypes.INTEGER,
        allownull: true
    },
},{
    timeStamps: false
})
module.exports = Maquinario