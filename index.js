const express = require('express');
const app = express();
const User = require('./models/User');


// Config
app.use(express.static(__dirname + '/public'));

// Antigo Body parser (descontinuado)
app.use(express.urlencoded({extended:false}))
app.use(express.json())

   

// Rotas
app.post('/add', function (req, res) {
    // req.body.nome
    User.create({
        nome: req.body.nome,
        cargo: req.body.cargo,
        dataNasc: req.body.dataNasc,
        estadoCivil: req.body.estadoCivil,
        sexo: req.body.sexo,
        cep: req.body.cep,
        rua: req.body.rua,
        numero: req.body.numero,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado,
        email: req.body.email,
        celular: req.body.celular,
        tel1: req.body.tel1,
        tel2: req.body.tel2,
        identidade: req.body.identidade,
        cpf: req.body.cpf,
        habilitacao: req.body.habilitacao,
        carro: req.body.carro
    }).then(()=>{
    // res.writeHead(301,
        // {Location: '/'}
        // );
        // res.end();
    }).catch((erro)=> {
        // res.send("Houve um erro: " + erro)
    })
})

app.listen(8081, function(){
    console.log(`Servidor rodando na url http://localhost:8081`)
});