const db = require('./db');


const UserSchema = db.mongoose.Schema({
    nome: {
        type: String
    },
    cargo: {
        type: String
    },
    dataNasc:  {
        type: String
    },
    estadoCivil:  {
        type: String
    },
    sexo:  {
        type: String
    },
    cep:  {
        type: String
    },
    rua:  {
        type: String
    },
    numero:  {
        type: String
    },
    bairro: {
        type: String
    },
    cidade:  {
        type: String
    },
    estado:  {
        type: String
    },
    email:  {
        type: String,
    },
    celular: {
        type: String
    },
    tel1: {
        type: String
    },
    tel2:  {
        type: String
    },
    identidade: {
        type: String
    },
    cpf:  {
        type: String,
        require: true
    },
    habilitacao: {
        type: String
    },
    carro:  {
        type: String
    }
}) 

const User = db.mongoose.model('usuarios', UserSchema)

module.exports = User;