const db = require('./db');

const User = db.sequelize.define('cadastros',{
    nome: {
        type: db.Sequelize.STRING
    },
    cargo: {
        type: db.Sequelize.STRING
    },
    dataNasc: {
        type: db.Sequelize.DATE
    },
    estadoCivil: {
        type: db.Sequelize.STRING
    },
    sexo: {
        type: db.Sequelize.STRING
    },
    cep: {
        type: db.Sequelize.STRING
    },
    rua: {
        type: db.Sequelize.STRING
    },
    numero: {
        type: db.Sequelize.STRING
    },
    bairro: {
        type: db.Sequelize.STRING
    },
    cidade: {
        type: db.Sequelize.STRING
    },
    estado: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    celular: {
        type: db.Sequelize.STRING
    },
    tel1: {
        type: db.Sequelize.STRING
    },
    tel2: {
        type: db.Sequelize.STRING
    },
    identidade: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.STRING,
        unique: true
    },
    habilitacao: {
        type: db.Sequelize.STRING
    },
    carro: {
        type: db.Sequelize.STRING
     }
    
})

// Só executa na hora de criar o model
//User.sync({force: true})

module.exports = User;