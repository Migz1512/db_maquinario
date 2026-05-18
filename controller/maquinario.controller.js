const Maquinario = require('../models/Maquinario')

const cadastrar = async (req, res)=>{
    const valores = req.body
    console.log(valores)

    let precoFin = 0

    if(valores.categoria === 'pequeno'){
        precoFin = valores.custo * 1.18
    }else if(valores.categoria === 'medio'){
        precoFin = valores.custo * 1.24
    }else if(valores.categoria === 'grande'){
        precoFin = valores.custo * 1.32
    }

    const valores2 = {
        nome: valores.nome,
        marca: valores.marca,
        porte: valores.porte,
        anoFab: valores.anoFab,
        custo: valores.custo,
        precoFin: precoFin
    }
    
    try{
        await Maquinario.create(valores2)
        res.status(201).json({message: 'Dados do maquinário cadastrado!'})
    }catch(err){
        res.status(500).json({message: 'Não foi possível cadastrar o maquinario'})
        console.error('Não foi possível cadastrar o maquinario')
    }

}

module.exports = {cadastrar}
