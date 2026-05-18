const express = require('express')
const app = express()
const cors = require('cors')

const hostname = 'hostname'
const PORT = 3000
const db = require('./db/conn')
const controller = require('./controller/maquinario.controller')

// ----- Middleware ------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// ----- Rotas -----------

app.post('/maquinario', maquinarioController.cadastrar)

// ----- Configurando server --
conn.sync()
.then(()=>{
    app.listen(PORT, hostname, ()=> {
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err)=>{
    console.error('Erro de conexâo com o banco de dados!',err)
})