const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const User = require('./models/User');


// Config
    // Template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    app.use(express.static(__dirname + '/public'));
 
    // Antigo Body parser (descontinuado)
    app.use(express.urlencoded({extended:false}))
    app.use(express.json())

   

// Rotas

    app.get('/', function (req, res) {
        // res.render('formulario')    
    })

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
          res.send("Usuário criado com sucesso")
      }).catch((erro)=> {
          res.send("Houve um erro: " + erro)
      })
    })


// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/public/index.html");
// });

// 


app.listen(8081, function(){
    console.log(`Servidor rodando na url http://localhost:8081`)
});